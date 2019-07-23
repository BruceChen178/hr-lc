import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

// import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasLogin = store.getters.hasLogin
  if (hasLogin) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
      Message.error('/login')
    } else {
      // if (store.getters.roles.length === 0) {
      //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
      //     next()
      //   }).catch((err) => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error(err || 'Verification failed, please login again')
      //       next({ path: '/' })
      //     })
      //   })
      // } else {
      //   next()
      // }
      const hasGetUserInfo = store.getters.roleName
      if (hasGetUserInfo) {
        next()
      } else {
        Message.error('before/user/getInfo')
        await store.dispatch('user/getInfo')
        Message.error('/user/getInfo')
        next()
        // try {
        //   // get user info
        //   await store.dispatch('user/getInfo')

        //   next()
        // } catch (error) {
        //   // remove token and go to login page to re-login
        //   await store.dispatch('user/logout')
        //   Message.error(error || 'Has Error')
        //   next(`/login?redirect=${to.path}`)
        //   // NProgress.done()
        // }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
      Message.error('whiteList')
    } else {
      // next('/login')
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
      Message.error('/login?redirect=${to.path}')
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
