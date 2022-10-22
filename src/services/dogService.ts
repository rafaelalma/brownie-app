import axiosInstance from '../axiosInstance'
import { Dog, DogSortField } from '../types/dogType'
import { SortOrder } from '../types/utilType'

let token: string | null = null

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const endpoint = 'dogs'

const getAll = async (
  sortField: DogSortField = DogSortField.Name,
  sortOrder: SortOrder = SortOrder.Ascending
): Promise<Dog[]> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const query = `?sortField=${sortField}&sortOrder=${sortOrder}`

  const response = await axiosInstance.get(endpoint + query, config)
  return response.data
}

const getById = async (id: string): Promise<Dog> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const response = await axiosInstance.get(`${endpoint}/${id}`, config)
  return response.data
}

const dogService = {
  setToken,
  getAll,
  getById,
}

export default dogService
