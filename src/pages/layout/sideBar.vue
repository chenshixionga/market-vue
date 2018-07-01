<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
     
    </el-menu>
  </el-scrollbar>
</template>

<script>

export default {
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
