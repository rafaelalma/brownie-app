import axios from 'axios'

import { Dog } from '../types/dogType'

let token: string | null = null

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const baseUrl = '/api/dogs'

const getAll = async (): Promise<Dog[]> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const response = await axios.get(baseUrl, config)
  return response.data
}

const getById = async (id: string): Promise<Dog> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const response = await axios.get(`${baseUrl}/${id}`, config)
  return response.data
}

const dogService = {
  setToken,
  getAll,
  getById,
}

export default dogService
