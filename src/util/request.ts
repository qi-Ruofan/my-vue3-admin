import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from "@/store";
import type { StateAll } from "@/store";
import { ElMessage } from 'element-plus'
import router from "@/router";

const instance = axios.create({
  // baseURL: 'http://localhost:3000/',
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(function (config) {
  if(config.headers) {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'//请求类型
    config.headers.Authorization = (store.state as StateAll).users.token
  }
  config.withCredentials = true
  
  config.baseURL = 'http://localhost:3000/'

  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截
instance.interceptors.response.use(function (response) {
  if(response.data.errmsg === 'token error') {
    ElMessage.error('token error')
    store.commit('users/clearToken')
    // 不建议编程式路由，不刷新页面
    setTimeout(() => {
      window.location.replace('/login')
    }, 1000)
  }
  else if(response.data.errmsg === 'error') {
    router.push('/500')
  }
  return response
}, function (error) {
  return Promise.reject(error.response.data)
})

interface Data {
  [index: string]: unknown
}

interface Http {
  get: (url: string, data?:Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  post: (url: string, data?:Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?:Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  patch: (url: string, data?:Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  delete: (url: string, data?:Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const http: Http = {
  get (url, data, config) {
    return instance.get(url, {
      params: data,
      ...config
    })
  },
  post (url, data, config) {
    return instance.post(url, data, config)
  },
  put (url, data, config) {
    return instance.put(url, data, config)
  },
  patch (url, data, config) {
    return instance.patch(url, data, config)
  },
  delete (url, data, config) {
    return instance.delete(url, {
      data,
      ...config
    })
  }
}

export default http

