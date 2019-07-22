import { login, logout, getInfo } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
// import { isEmptyNull } from '@/utils/index'
// import { resetRouter } from '@/router'
import store from '@/store'
import router from '@/router'
import ta from '@/images/user.png'
import { Message } from 'element-ui'

const state = {
  username: 'admin',
  nickname: 'admin',
  userId: '10003',
  // avatar: 'https://www.gravatar.com/avatar/6560ed55e62396e40b34aac1e5041028',
  avatar: ta,
  roleId: '1',
  roleName: '',
  menus: [],
  permissions: []
}

const mutations = {
  SET_USER_NAME: (state, username) => {
    state.username = username
  },
  // SET_USER: (state, userInfo) => {
  //   state.avatar = isEmptyNull(userInfo.avatar) ? ta : userInfo.avatar
  //   state.username = userInfo.username
  //   state.nickname = userInfo.nickname
  //   state.userId = userInfo.userId
  //   state.role = userInfo.roleName
  //   state.menus = userInfo.menuList
  //   state.permissions = userInfo.permissionList
  // },
  SET_USER: (state, list) => {
    for (let i = 0; i < list.length; i += 1) {
      state.userId = list[i].userId
      state.nickname = list[i].nickname
      state.roleId = list[i].roleId
      state.roleName = list[i].roleName
      let x = 0
      for (; x < state.menus.length; x += 1) {
        if (list[i].menuCode) {
          if (list[i].menuCode === state.menus[x]) {
            break
          }
        }
      }
      if (x === state.menus.length) {
        if (list[i].menuCode) {
          state.menus.push(list[i].menuCode)
        }
      }

      let y = 0
      for (; y < state.permissions.length; y += 1) {
        if (list[i].permissionCode) {
          if (list[i].permissionCode === state.permissions[y]) {
            break
          }
        }
      }
      if (y === state.permissions.length) {
        if (list[i].permissionCode) {
          state.permissions.push(list[i].permissionCode)
        }
      }
    }
  },
  RESET_USER: (state) => {
    state.avatar = ta
    state.username = ''
    state.nickname = ''
    state.userId = ''
    state.roleName = ''
    state.roleId = ''
    state.menus = []
    state.permissions = []
  },
  SET_USERNAME: (state, value) => {
    state.username = value
  },
  SET_NICKNAME: (state, value) => {
    state.nickname = value
  },
  SET_AVATAR: (state, value) => {
    state.avatar = value
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const username = userInfo.username.trim()
    commit('SET_USER_NAME', username)
    console.log(store.getters.username)
    return new Promise((resolve, reject) => {
      login(username, userInfo.passwd)
        .then(data => {
          if (data.code === 1) {
            // cookie中保存前端登录状态
            setToken()
          } else {
            Message.error(data.msg)
          }
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    console.log(state)
    console.log(store.getters.username)
    return new Promise((resolve, reject) => {
      getInfo(state.username)
        .then(data => {
          if (!data) {
            // reject('Verification failed, please Login again.')
            reject(new Error('Verification failed, please Login again.'))
          }

          console.log(data)
          // 储存用户信息
          commit('SET_USER', data.permissionList)
          // cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
          setToken()
          // 生成路由
          const userPermission = state
          store.dispatch('permission/GenerateRoutes', userPermission).then(() => {
            // 生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
            router.addRoutes(store.getters.addRouters)
          })
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          commit('RESET_USER')
          removeToken()
          resolve()
        })
        .catch(error => {
          commit('RESET_USER')
          removeToken()
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
