import axios from 'axios'
import { Dog } from './types'

const baseUrl = '/api/dogs'

const getAll = async (): Promise<Dog[]> => {
  const response = await axios.get(baseUrl)
  return response.data
}

const dogService = {
  getAll,
}

export default dogService
