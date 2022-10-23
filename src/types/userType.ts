export enum Role {
  Administrator = 4,
  Coordinator = 3,
  Veteran = 2,
  Volunteer = 1,
  User = 0,
}

export interface User {
  username: string
  token: string
  name: string | null
  phone: string | null
  email: string | null
  roles: Role[]
}

export type Credentials = {
  username: string
  password: string
}
