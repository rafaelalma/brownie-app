import { IsCatFriendly, IsSpayedOrNeutered, Size } from '../types/dogType'

const getSizeText = (size: Size) => {
  switch (size) {
    case Size.VeryBig:
      return 'Muy grande'
    case Size.Big:
      return 'Grande'
    case Size.BigMedium:
      return 'Grande - Mediano'
    case Size.Medium:
      return 'Mediano'
    case Size.MediumLittle:
      return 'Mediano - Pequeño'
    case Size.Little:
      return 'Pequeño'
  }
}

const getIsSpayedOrNeutered = (isSpayedOrNeutered: IsSpayedOrNeutered) => {
  switch (isSpayedOrNeutered) {
    case IsSpayedOrNeutered.Yes:
      return true
    case IsSpayedOrNeutered.No:
      return false
    case IsSpayedOrNeutered.Null:
      return null
  }
}

const getIsCatFriendly = (isCatFriendly: IsCatFriendly) => {
  switch (isCatFriendly) {
    case IsCatFriendly.Yes:
      return true
    case IsCatFriendly.No:
      return false
    case IsCatFriendly.Null:
      return null
  }
}

const dogHelper = {
  getSizeText,
  getIsSpayedOrNeutered,
  getIsCatFriendly,
}

export default dogHelper
