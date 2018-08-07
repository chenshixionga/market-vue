<template>
  <el-container>
    <el-aside width="200px">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main style="line-height: 50px">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import sideBar from '@/pages/layout/sideBar'
  export default {
    components: {
      sideBar
    },
    data () {
      return {
        login:{
          user:'',
          password:''
        }
      }
    },
    methods:{}
  }
</script>
<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
