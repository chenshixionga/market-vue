import axios from 'axios'
import request from '@/utils/request'
export function login(userInfo) {
    // return axios.post('http://market-uic.djws.com.cn/api/login',{
    //             loginName: userInfo.user,
    //             password: userInfo.password
    //         })
    return request({
        url: '/login',
        method: 'post',
        data: {
                loginName: userInfo.user,
                password: userInfo.password
            }
        })        
}
export function marketList(data) {
    return request({
        url: '/markets',
        method: 'get',
        params: data
        })        
}