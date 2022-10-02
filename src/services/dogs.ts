import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/dogs'

const getAll = () => {
  return axios.get(baseUrl)
}

const dogService = {
  getAll,
}

export default dogService
