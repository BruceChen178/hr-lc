const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,

  username: state => state.user.username,
  nickname: state => state.user.nickname,
  userId: state => state.user.userId,
  roleId: state => state.user.roleId,
  roleName: state => state.user.roleName,
  menus: state => state.user.menus,
  permissions: state => state.user.permissions,
  hasLogin: state => state.user.hasLogin,

  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs,
  allMetadatas: state => state.ioDevice.metadatas,
  getMetadataBySection: (state) => (datasourceId, itemType, direction) => {
    return state.ioDevice.metadatas.filter(metadata => metadata.datasourceId === datasourceId &&
        metadata.direction === direction && metadata.sourceItemId.slice(0, 1) === itemType)
  }
}
export default getters
