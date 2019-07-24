import Cookies from 'js-cookie'

const TokenKey = 'hasLogin'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken() {
  return Cookies.set(TokenKey, '1')
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
