import request from '@/utils/request'

// inspection
export function getInspectionHistory(query) {
  return request({
    url: '/v1/history/inspection'.concat('/', query.time.slice(0, 1), '/', query.time.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getInspectionHistoryByPalletId(query) {
  return request({
    url: '/v1/history/inspection'.concat('/', query.palletId, '/', query.time.slice(0, 1), '/', query.time.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getInspectionHistoryByPanelId(query) {
  return request({
    url: '/v1/history/inspection'.concat('/', query.panelId, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

// product
export function getProductHistory(query) {
  return request({
    url: '/v1/history/product'.concat('/', query.time.slice(0, 1), '/', query.time.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getProductHistoryByPalletId(query) {
  return request({
    url: '/v1/history/product'.concat('/', query.palletId, '/', query.time.slice(0, 1), '/', query.time.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getProductHistoryByPanelId(query) {
  return request({
    url: '/v1/history/product'.concat('/', query.panelId, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

// status
export function getStatusHistory(query) {
  return request({
    url: '/v1/history/status'.concat('/', query.time.slice(0, 1), '/', query.time.slice(1, 2), '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getStatusHistoryByUnitName(query) {
  return request({
    url: '/v1/history/status'.concat('/', query.time.slice(0, 1), '/', query.time.slice(1, 2), '/', query.unitName, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getStatusHistoryByDay(query) {
  return request({
    url: '/v1/history/status'.concat('/', query.startDate, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}
