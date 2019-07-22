import store from '@/store'

export function hasPermission(permission) {
  const myPermissions = store.getters.permissions
  const { roleId } = store.getters
  if (roleId === 1) {
    return true
  }
  return myPermissions.indexOf(permission) > -1
}
