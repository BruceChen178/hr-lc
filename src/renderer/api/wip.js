import request from '@/utils/request'

// pallets
export function getAllPallets(query) {
  return request({
    url: '/v1/wip/pallets'.concat('/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}
export function getPallet(query) {
  return request({
    url: '/v1/wip/pallet/id'.concat('/', query.palletId),
    method: 'get'
  })
}
export function getPalletsByPosId(query) {
  return request({
    url: '/v1/wip/pallets/pos'.concat('/', query.position, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getPalletsByAgingInTime(query) {
  return request({
    url: '/v1/wip/pallets/in'.concat('/', query.agingInputTime.slice(0, 1), '/',
      query.agingInputTime.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getPalletsByAgingOutTime(query) {
  return request({
    url: '/v1/wip/pallets/out'.concat('/', query.agingOutputTime.slice(0, 1), '/',
      query.agingOutputTime.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

// panels

export function getPanels(query) {
  return request({
    url: '/v1/wip/panels/page'.concat('/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getPanelsByPalletId(query) {
  return request({
    url: '/v1/wip/panels/pallet'.concat('/', query.palletId, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getPanelByBluId(query) {
  return request({
    url: '/v1/wip/panel/blu'.concat('/', query.bluId, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}
