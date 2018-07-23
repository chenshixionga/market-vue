import { setToken } from '@/utils/auth'
import { login } from '@/api/login'

const user = {
    state: {
        token: ''
    },
    mutations: {
        SET_TOKEN(state,token) {
            state.token = token
        }
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                /* login(userInfo).then(response => { // 登录到泉州食达康
                    console.log(response)
                    setToken(response.data.token)
                    commit('SET_TOKEN', response.data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })*/
              setToken('alkdadakjhkqyq3yiehsdkj') // 模拟直接登入
              commit('SET_TOKEN', 'alkdadakjhkqyq3yiehsdkj')
              resolve()
            })
        }
    }
}
export default user
