import request from '@/utils/request'

export function GetCurrentEQPState() {
  return request({
    url: '/v1/others/current/states',
    method: 'get'
  })
}
export function GetCurrentTactTime() {
  return request({
    url: '/v1/others/current/tacttimes',
    method: 'get'
  })
}
export function GetCurrentCapacity() {
  return request({
    url: '/v1/others/current/capacity',
    method: 'get'
  })
}
