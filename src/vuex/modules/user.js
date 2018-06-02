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
                login(userInfo).then(data => {
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
export default user