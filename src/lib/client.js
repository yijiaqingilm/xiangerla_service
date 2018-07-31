import Vue from 'vue'
import { getToken } from 'lib/common'

const methods = ['get', 'post', 'put', 'del', 'patch']
export default class ApiClient {
  constructor () {
    methods.forEach((method) => {
      this[method] = (url, params = {}, {global = true, isManager = false} = {}) => new Promise((resolve, reject) => {
        if (!url) {
          reject({_error: '错误的请求地址'})
        }
        Vue.http({
          method: method,
          url: serverUrl + url,
          [method === 'get' ? 'params' : 'body']: params,
          global: global
        }).then((response) => {
          resolve(response.body)
        }).catch((error) => {
          reject(error)
        })
      })
    })
  }
}

