import { Role, User } from '../types/userType.ts'

const isVolunteer = (user: User | null) =>
  user && user.roles.some((role) => role >= Role.Volunteer)

const isCoordinator = (user: User | null) =>
  user && user.roles.some((role) => role >= Role.Coordinator)

const userHelper = {
  isVolunteer,
  isCoordinator,
}

export default userHelper
