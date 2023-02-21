import request from '@/utils/request'

export function getList() {
  return request({
    url: '/robot/list',
    method: 'get'
  })
}

export function save(params) {
  return request({
    url: '/robot',
    method: 'post',
    data: params
  })
}

export function remove(id) {
  return request({
    url: '/robot/' + id,
    method: 'delete'
  })
}
