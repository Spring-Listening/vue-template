/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-12 11:09:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:47:15
 */
/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-10 18:59:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-10 19:16:41
 */
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
// 导入模板
const { vueTemplate } = require('./template')
// 生成文件
const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
// 生成路由
const getFile = filePath => {
  try {
    const fileText = fs.readFileSync(filePath, { flag: 'r+', encoding: 'utf8' })
    return fileText
  } catch (error) {
    return false
  }
}
const generateRoute = (path, filename) => {
  const content = `},
  {
    path: '/${filename}',
    name: '${filename}',
    component: () => import('@${path.split('/src')[1]}')
  } // last line route append`
  const routerPath = resolve(__dirname, '../src/router/auto-build.js')
  return new Promise((resolve, reject) => {
    try {
      let routeText = getFile(routerPath)
      const text = routeText.replace(`} // last line route append`, content)
      fs.writeFileSync(routerPath, text)
      log('路由插入成功')
      resolve(true)
    } catch (error) {
      errorLog('路由插入失败')
      reject(error)
    }
  })
}
log('请输入要生成的页面组件名称、会生成在 views/目录下')
process.stdin.on('data', async chunk => {
  // 组件名称
  const inputName = String(chunk)
    .trim()
    .toString()
  // Vue页面组件路径 可根据实际情况修改
  const pathArr = inputName.split('/')
  const filename = pathArr.pop() || 'index'
  const compath = pathArr.join('/')
  const componentPath = resolve('../src/views', compath)
  // vue文件
  const vueFile = resolve(componentPath, `${filename}.vue`)
  // 入口文件
  // const entryFile = resolve(componentPath, 'entry.js')
  // 判断组件文件夹是否存在
  const hasComponentExists = fs.existsSync(componentPath)
  if (hasComponentExists) {
    // errorLog(`${compath}页面组件已存在，请重新输入`)
    // return
  } else {
    log(`正在生成 component 目录 ${componentPath}`)
    await dotExistDirectoryCreate(componentPath)
  }
  try {
    // 获取组件名
    // if (inputName.includes('/')) {
    //   const inputArr = inputName.split('/')
    //   componentName = inputArr[inputArr.length - 1]
    // } else {
    //   componentName = inputName
    // }
    log(`正在生成 vue 文件 ${vueFile}`)

    await generateFile(vueFile, vueTemplate(filename))
    // log(`正在生成 entry 文件 ${entryFile}`)
    // await generateFile(entryFile, entryTemplate(componentName))
    log(`正在生成路由`)
    await generateRoute(vueFile, filename)
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }
  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})

function dotExistDirectoryCreate(directory) {
  return new Promise(resolve => {
    mkdirs(directory, function() {
      resolve(true)
    })
  })
}
// 递归创建目录
function mkdirs(directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function() {
      fs.mkdirSync(directory)
      callback()
    })
  }
}
