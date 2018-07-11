<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#D3DCE6">
      <!--<el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-submenu index="1-4">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>选项1</span>
          </template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-2">
          <span>选项2</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>-->
      <template v-for="route in routes">
         <el-submenu :index="route.path" v-if="route.children.length > 0">
           <template slot="title">
             <i class="el-icon-location"></i>
             <span>{{ route.meta.title }}</span>
           </template>
           <!--<template v-for="child in route.children">
             <el-submenu :index="child.path" v-if="child.children.length > 0">
               <template slot="title">
                 <i class="el-icon-location"></i>
                 <span>{{ child.meta.title }}</span>
               </template>
               <el-form-item :index="subchild.path" v-for="subchild in child.children">{{ subchild.meta.title }}</el-form-item>
             </el-submenu>
             <el-form-item :index="child.path" v-else>{{ child.meta.title }}</el-form-item>
           </template>-->
         </el-submenu>
         <el-form-item :index="route.path" v-else>{{ route.meta.title }}</el-form-item>
      </template>
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
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
