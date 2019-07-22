import { asyncRouterMap, constantRouterMap } from '@/router/index'
import { deepClone } from '@/utils/index'

/**
 * 判断用户是否拥有此菜单
 * @param menus
 * @param route
 */
function hasPermission(menus, route) {
  if (route.menu) {
    /*
    * 如果这个路由有menu属性,就需要判断用户是否拥有此menu权限
    */
    return menus.indexOf(route.menu) > -1
  }
  return true
}

/**
 * 递归过滤异步路由表，返回符合用户菜单权限的路由表
 * @param asyncRouterMap
 * @param menus
 */
function filterAsyncRouter(asyncRouterMap, menus) {
  const accessedRouters = asyncRouterMap.filter(route => {
    // filter,js语法里数组的过滤筛选方法
    if (hasPermission(menus, route)) {
      if (route.children && route.children.length) {
        // 如果这个路由下面还有下一级的话,就递归调用
        route.children = filterAsyncRouter(route.children, menus)
        // 如果过滤一圈后,没有子元素了,这个父级菜单就也不显示了
        return (route.children && route.children.length)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  namespaced: true,
  state: {
    routers: [], // 本用户所有的路由,包括了固定的路由和下面的addRouters
    addRouters: [] // 本用户的角色赋予的新增的动态路由
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers) // 将固定路由和新增路由进行合并, 成为本用户最终的全部路由信息
      console.log(state.routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, userPermission) {
      // 生成路由
      return new Promise(resolve => {
        // roles是后台传过来的角色数组,比如['管理员','文章']
        // const role = userPermission.roleName
        // const roleId = userPermission.roleId
        // const menus = userPermission.menuList

        console.log(userPermission)
        const localAsyncRouterMap = deepClone(asyncRouterMap)
        const { roleId } = userPermission
        const { menus } = userPermission
        // 声明 该角色可用的路由
        let accessedRouters
        if (roleId === 1) {
          // 如果角色里包含'管理员',那么所有的路由都可以用
          // 其实管理员也拥有全部菜单,这里主要是利用角色判断,节省加载时间

          accessedRouters = localAsyncRouterMap
        } else {
          // 否则需要通过以下方法来筛选出本角色可用的路由
          accessedRouters = filterAsyncRouter(localAsyncRouterMap, menus)
          accessedRouters = accessedRouters.filter(route => {
            if (route.children && route.children.length > 0) {
              return true
            }
            return false
          })
          for (let i = 0; i < accessedRouters.length; i += 1) {
            if (accessedRouters[i].children && accessedRouters[i].children.length > 0) {
              accessedRouters[i].redirect = accessedRouters[i].path.concat('/').concat(accessedRouters[i].children[0].path)
            }
          }
        }
        // 执行设置路由的方法
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}
export default permission
