import request from '@/utils/request'

// parameters
export function getParameters(query) {
  return request({
    url: '/v1/equipment/parameter/get'.concat('/', query.currentDS === '' ? 'all' : query.currentDS, '/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getParameterVariables(query) {
  return request({
    url: '/v1/equipment/parameter/variables/get'.concat('/', query.parameterName),
    method: 'get'
  })
}

export function getExceptionDefinitions(query) {
  return request({
    url: '/v1/equipment/exceptions/get'.concat('/', query.page, '/', query.limit, '/', query.sort),
    method: 'get'
  })
}

export function getExceptionParameterLink(query) {
  return request({
    url: '/v1/equipment/exception/parameter/get'.concat('/', query.alarmId),
    method: 'get'
  })
}

