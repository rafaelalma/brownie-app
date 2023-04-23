import axiosInstance from '../axiosInstance.ts'
import { Treatment } from '../types/treatmentType.ts'

let token: string | null = null

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const endpoint = 'treatments'

const getAll = async (): Promise<Treatment[]> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const response = await axiosInstance.get(endpoint, config)
  return response.data
}

const treatmentService = {
  setToken,
  getAll,
}

export default treatmentService
