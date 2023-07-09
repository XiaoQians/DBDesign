import request from '@/utils/request'

//首页的走马灯部分
export function pictureget(params) {
    return request({
      url: '/Login/login',
      method: 'get',
      params: {
        user_id: params.user,
        password: params.pass
      }
    })
  }