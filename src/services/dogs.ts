import axios from 'axios'
const baseUrl = '/api/dogs'

const getAll = () => {
  return axios.get(baseUrl)
}

const dogService = {
  getAll,
}

export default dogService
