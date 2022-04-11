// 封装后台接口方法
import { get, post, put, del, uploader } from './http'
export const LOGIN = (params) => post('/api/login', params)
