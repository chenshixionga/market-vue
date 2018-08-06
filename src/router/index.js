import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Layout from '@/pages/layout/layout'
import SplitPane from '@/pages/splitpane'
import Sticky from '@/pages/sticky'

Vue.use(Router)

export default new Router({
 // mode:'history',
  routes: [
    {
      path: '',
      name: 'layout',
      component: Layout,
      meta: { title: '布局'},
      children:[{
        path: 'hello',
        name: 'hello',
        component: HelloWorld,
        meta: { title: '欢迎'}
      }, {
          path: 'home',
          name: 'home',
          component: Home,
          meta: { title: '主页'}
        },  {
          path: 'split',
          name: 'splitpane',
          component: SplitPane,
          meta: { title: '空间分割'}
        },  {
        path: 'sticky',
        name: 'sticky',
        component: Sticky,
        meta: { title: '吸附'}
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '登入'}
    }
  ]
})
