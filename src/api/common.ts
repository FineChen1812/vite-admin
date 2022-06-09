import request from '@/utils/request';
import { ILoginInfo } from './types/common';

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }



export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info',
  })
  // return request.get<{
  //   status: number
  //   msg: string
  //   data: {
  //     logo_square: string
  //     slide: string[]
  //   }
  // }>('/login/info')
  // return request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>>('/login/info')
}