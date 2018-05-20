<template>
  <div class="login">
    <el-form :model="login" status-icon :rules="rules" ref="loginRef" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="login.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="login.password" auto-complete="off"></el-input>
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginRef')">登录</el-button>
        <el-button @click="resetForm('loginRef')">重置</el-button>
        <el-button @click="axiosTest()">test</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from './loginService.js'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
       login:{
         user:'',
         password:''
       },
       rules:{
         user: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
       }
    }
  },
  methods:{
    submitForm(formName){
       this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post( this.$api+'/login',{
              loginName: this.login.user,
              password: this.login.password
            }).then((response)=> {
              console.log(response)
            })
            .catch((error)=> {
              console.log(error);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        }); 
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
        console.log("reset")
   },
   axiosTest(){
        let url = this.$apiBeen +"/v2/movie/top250"
        console.log(url)
        this.$axios.get(url,{
          params:{
            start:0,
            count:10
          }
        })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width:30%;
    margin-top: 10%;
    margin-left: 20%;
  }
</style>
