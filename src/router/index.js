import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Layout from '@/pages/layout/layout'

Vue.use(Router)

export default new Router({
 // mode:'history',
 /* routes: [
    {
      path: '',
      name: 'layout',
      component: Layout,
      children:[{
        path: 'home',
        name: 'home',
        component: HelloWorld
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]*/
  routes: [
    {
      path: '',
      name: 'layout',
      component: Layout,
      meta: { title: '布局'},
      children:[{
        path: 'home',
        name: 'home',
        component: HelloWorld,
        meta: { title: '主页'}
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '登入'}
    }
  ]
})
