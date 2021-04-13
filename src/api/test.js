/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-03-29 17:14:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-07 20:06:35
 */

import Http from '@/utils/http'

/**
 * @name: chunwen
 * @test:
 * @msg: Http后接请求方式
 * @param {
 *    url,  请求链接
 *    data, 参数
 *    object对象，用于添加/覆盖请求头内的参数
 *    示例：{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
 * }
 * @return Promise实例
 */
export const example1 = data => {
  return Http.post('/api/setting/update-company.json', data)
}
