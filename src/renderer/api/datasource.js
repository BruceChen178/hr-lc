import request from '@/utils/request'

// data sources
export function getDatasources(query) {
  return request({
    url: '/v1/datasource/get'.concat('/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getMitPLCCommInfo(query) {
  return request({
    url: '/v1/datasource/mitplc/get'.concat('/', query.currentDS),
    method: 'get'
  })
}

export function getMitPLCConfigs(query) {
  return request({
    url: '/v1/datasource/mitplc/configs/get'.concat('/', query.currentDS),
    method: 'get'
  })
}

export function getEQMetadata(query) {
  return request({
    url: '/v1/datasource/eq/data/get'.concat('/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getEQMetadataByDSId(query) {
  return request({
    url: '/v1/datasource/eq/data/get'.concat('/', query.currentDS, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}
export function getDataSourceConnState(RequestSource) {
  return request({
    url: '/v1/datasource/eq/plc/connection/{uid}',
    method: 'get'
  })
}
export function IsMESConnected() {
  return request({
    url: '/v1/datasource/host/connection/state',
    method: 'get'
  })
}
export function GetMESMode() {
  return request({
    url: '/v1/datasource/host/connection/mode',
    method: 'get'
  })
}
