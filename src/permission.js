import router from './router'
import { getToken } from '@/utils/auth' // 验权

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    console.log(getToken())
    console.log(to.path === '/')
    if(to.path === '/' || to.path === '/login') {
      next({ path: '/home'})
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
 NProgress.done()
})
