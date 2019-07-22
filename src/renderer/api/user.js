import request from '@/utils/request'

export function login(username, passwd) {
  return request({
    url: '/v1/rbac/login/auth',
    method: 'post',
    withCredentials: true,
    crossDomain: true,
    data: {
      username,
      passwd
    }
  })
}

export function getInfo(username) {
  return request({
    url: '/v1/rbac/login/getInfo/'.concat(username),
    withCredentials: true,
    crossDomain: true,
    method: 'get'
    // params: { token },
  })
}

export function logout() {
  return request({
    url: '/v1/rbac/login/logout',
    withCredentials: true,
    crossDomain: true,
    method: 'post'
  })
}
