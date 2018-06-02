import axios from 'axios'
export function login(userInfo) {
    return axios.post('http://market-uic.djws.com.cn/api/login',{
                loginName: userInfo.user,
                password: userInfo.password
            })
}