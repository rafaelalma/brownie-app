export enum Role {
  Administrator = 'administrator',
  Coordinator = 'coordinator',
  Veteran = 'veteran',
  Volunteer = 'volunteer',
  User = 'user',
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
