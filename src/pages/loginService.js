const login = (user,password)=>{
    this.$axios.post('/login', {
        loginName: user,
        password: password
      })
}

export {login}