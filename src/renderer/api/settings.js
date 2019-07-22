import request from '@/utils/request'

export function getInspectionLists(query) {
  return request({
    // url: '/v1/settings/inspections'.concat('/', query.page, '/', query.limit, '/', query.sort),
    url: '/v1/settings/inspection/list',
    method: 'get'
  })
}
export function createInspection(data) {
  return request({
    url: '/v1/settings/createInspection',
    method: 'post',
    data
  })
}
export function updateInspection(data) {
  return request({
    url: '/v1/settings/inspection/update',
    method: 'post',
    data
  })
}

export function getHostinfos(query) {
  return request({
    // url: '/v1/settings/hostInfos'.concat('/', query.page, '/', query.limit, '/', query.sort),
    url: '/v1/settings/mes/host/info',
    method: 'get'
  })
}
export function updateHostinfos(data) {
  return request({
    url: '/v1/settings/mes/host/update',
    method: 'post',
    data
  })
}
