<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#D3DCE6">
      <template v-for="route in routes">
         <el-submenu :index="route.path" v-if="route.children && route.children.length > 0">
           <template slot="title">
             <i class="el-icon-location"></i>
             <span>{{ route.meta.title }}</span>
           </template>
           <template v-for="child in route.children">
             <el-submenu :index="child.path" v-if="child.children && child.children.length > 0">
               <template slot="title">
                 <i class="el-icon-location"></i>
                 <span>{{ child.meta.title }}</span>
               </template>
               <template  v-for="subchild in child.children">
                 <router-link :to="route.path+'/'+child.path+'/'+subchild.path">
                   <el-menu-item :index="route.path + '/' + child.path + '/' + subchild.path">{{ subchild.meta.title }}</el-menu-item>
                 </router-link>
               </template>
             </el-submenu>
             <router-link :to="route.path+'/'+child.path" v-else>
               <el-menu-item :index="route.path+'/'+child.path">{{ child.meta.title }}</el-menu-item>
             </router-link>
           </template>
         </el-submenu>
         <router-link :to="route.path" v-else>
           <el-menu-item :index="route.path">
             <template slot="title">
               <i class="el-icon-location"></i>
               <span>{{ route.meta.title }}</span>
             </template>
           </el-menu-item>
         </router-link>
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
