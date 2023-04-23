import axiosInstance from '../axiosInstance.ts'
import { Credentials, User } from '../types/userType.ts'

const endpoint = 'login'

const login = async (credentials: Credentials): Promise<User> => {
  const response = await axiosInstance.post(endpoint, credentials)
  return response.data
}

const loginService = {
  login,
}

export default loginService
