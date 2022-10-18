import axios, { AxiosError } from 'axios'
import { LOCAL_STORAGE_USER_KEY } from './constants'

const axiosInstance = axios.create({
  baseURL: '/api/',
  timeout: 1000,
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error && error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
        window.location.reload()
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
