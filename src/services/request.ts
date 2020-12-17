import axios, { AxiosRequestConfig } from 'axios'

import { apiBaseUrl } from '@config'
import errorHandler from '@utils'

const request = (options: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 10000,
    })

    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (err) => {
        console.log('错误拦截')
        if (err && err.response) {
          errorHandler(err)
        }
      }
    )

    instance(options)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

export default request
