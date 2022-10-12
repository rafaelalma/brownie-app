import axios from 'axios'

import { Credentials, User } from '../types/userType'

const baseUrl = '/api/login'

const login = async (credentials: Credentials): Promise<User> => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const loginService = {
  login,
}

export default loginService
