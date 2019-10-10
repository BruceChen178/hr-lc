import request from '@/utils/request'

export function getInspectionLists() {
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
export function UpdateInspMachineEQPID(data) {
  return request({
    url: '/v1/settings/inspection/update',
    method: 'post',
    data
  })
}

export function getHostInfos() {
  return request({
    url: '/v1/settings/mes/host/info',
    method: 'get'
  })
}
export function updateHostInfos(data) {
  return request({
    url: '/v1/settings/mes/host/update',
    method: 'post',
    data
  })
}

export function SwitchMESConnectMode() {
  return request({
    url: '/v1/settings/mes/host/switch',
    method: 'get'
  })
}

export function getLineInfo() {
  return request({
    url: '/v1/settings/current/line',
    method: 'get'
  })
}
