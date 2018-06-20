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
                login(userInfo).then(response => {
                    console.log(response)
                    setToken(response.data.token)
                    commit('SET_TOKEN', response.data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
export default user