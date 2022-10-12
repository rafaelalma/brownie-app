import axios from 'axios'

import { Dog } from '../types/dogTypes'

const baseUrl = '/api/dogs'

const getAll = async (): Promise<Dog[]> => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getById = async (id: string): Promise<Dog> => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const dogService = {
  getAll,
  getById,
}

export default dogService
