/**
 * Created by chenshixiong on 2018/6/22.
 */
import request from '@/utils/request'
export function orderList(query) {
  return request({
    // baseURL: 'http://erp.ijiaol.com:18010',
    baseURL: '/erpApi',
    url: '/lwj/quotation_search',
    method: 'post',
    data: query
  })
}
