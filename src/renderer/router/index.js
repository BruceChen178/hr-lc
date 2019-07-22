import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouterMap = [
  {
    path: '/io',
    component: Layout,
    children: [
      {
        path: 'io',
        name: 'io',
        component: () => import('@/views/io/index'),
        meta: { title: 'IO', icon: 'example' }
      }
    ]
  },

  {
    path: '/data',
    component: Layout,
    redirect: '/data/tacttime',
    name: 'Data',
    meta: { title: 'Data', icon: 'chart' },
    children: [
      {
        path: 'tacttime',
        name: 'Tact Time',
        component: () => import('@/views/data/tacttime'),
        meta: { title: 'Tact Time', icon: 'table' }
      },
      {
        path: 'eqpstate',
        name: 'EQP State',
        component: () => import('@/views/data/eqpstate'),
        meta: { title: 'EQP State', icon: 'table' }
      },
      {
        path: 'capacity',
        name: 'Capacity',
        component: () => import('@/views/data/capacity'),
        meta: { title: 'Capacity', icon: 'table' }
      },
      {
        path: 'eqp-parameters',
        name: 'EQP Parameters',
        component: () => import('@/views/data/eqp-parameters'),
        meta: { title: 'EQP Parameters', icon: 'table' }
      },
      {
        path: 'product-parameters',
        name: 'Product Parameters',
        component: () => import('@/views/data/product-parameters'),
        meta: { title: 'Product Parameters', icon: 'table' }
      }
    ]
  },

  {
    path: '/settings',
    component: Layout,
    redirect: '/data/inspection',
    name: 'Settings',
    meta: { title: 'Settings', icon: 'edit' },
    children: [
      {
        path: 'inspection',
        name: 'Inspection',
        component: () => import('@/views/settings/inspection-list'),
        meta: { title: 'Inspection-list', icon: 'table' }
      },
      {
        path: 'host',
        name: 'Host',
        component: () => import('@/views/settings/mes-comm-info'),
        meta: { title: 'Host', icon: 'tree' }
      }
    ]
  },

  {
    path: '/alarms',
    component: Layout,
    children: [
      {
        path: 'alarms',
        name: 'Alarms',
        component: () => import('@/views/alarms/index'),
        meta: { title: 'Alarms', icon: 'message' }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    children: [
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/permission/index'),
        meta: { title: 'Permission', icon: 'password' }
      }
    ]
  },

  {
    path: '/config',
    component: Layout,
    redirect: '/config/inspection',
    name: 'Config',
    meta: { title: 'Config', icon: 'form' },
    children: [
      {
        path: 'items',
        name: 'Item',
        component: () => import('@/views/config/items'),
        meta: { title: 'Items', icon: 'table' }
      },
      {
        path: 'metadata',
        name: 'Metadata',
        component: () => import('@/views/config/metadata'),
        meta: { title: 'Metadata', icon: 'tree' }
      }
    ]
  },
  {
    path: '/userAuthority',
    component: Layout,
    redirect: '/userAuthority/user',
    name: 'UserAuthority',
    meta: { title: 'UserAuthority', icon: 'table' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user/user'),
        meta: { title: 'User', icon: 'user' },
        menu: 'user'
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/user/role'),
        meta: { title: 'Role', icon: 'password' },
        menu: 'role'
      },
      {
        path: 'log',
        name: 'Log',
        component: () => import('@/views/user/log'),
        meta: { title: 'Log', icon: 'password' },
        menu: 'log'
      },
      {
        path: 'line',
        name: 'Line',
        component: () => import('@/views/user/line'),
        meta: { title: 'Line', icon: 'password' },
        menu: 'line'
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

