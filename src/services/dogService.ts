import axiosInstance from '../axiosInstance'
import { Dog, DogGroupField, DogSortField, NewDog } from '../types/dogType'
import { SortOrder } from '../types/utilType'

let token: string | null = null

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const endpoint = 'dogs'

const getAll = async (
  sortField: DogSortField = DogSortField.Name,
  sortOrder: SortOrder = SortOrder.Ascending,
  searchField: string = ''
): Promise<Dog[]> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const query = `?sortField=${sortField}&sortOrder=${sortOrder}&searchField=${searchField}`

  const response = await axiosInstance.get(endpoint + query, config)
  return response.data
}

const getAllGrouped = async (
  groupField: DogGroupField,
  searchField: string = ''
): Promise<any> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const query = `?groupField=${groupField}&searchField=${searchField}`

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

const add = async (newDog: NewDog): Promise<Dog> => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  const response = await axiosInstance.post(endpoint, newDog, config)
  return response.data
}

const remove = async (id: string) => {
  const config = token
    ? {
        headers: { Authorization: token },
      }
    : {}

  await axiosInstance.delete(`${endpoint}/${id}`, config)
}

const dogService = {
  setToken,
  getAll,
  getAllGrouped,
  getById,
  add,
  remove,
}

export default dogService
