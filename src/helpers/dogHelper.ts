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

const getIsSpayedOrNeuteredBoolean = (
  isSpayedOrNeutered: IsSpayedOrNeutered
) => {
  switch (isSpayedOrNeutered) {
    case IsSpayedOrNeutered.Yes:
      return true
    case IsSpayedOrNeutered.No:
      return false
    case IsSpayedOrNeutered.Null:
      return null
  }
}

const getIsSpayedOrNeuteredEnum = (isSpayedOrNeutered: Boolean | null) => {
  switch (isSpayedOrNeutered) {
    case true:
      return IsSpayedOrNeutered.Yes
    case false:
      return IsSpayedOrNeutered.No
    default:
      return IsSpayedOrNeutered.Null
  }
}

const getIsCatFriendlyBoolean = (isCatFriendly: IsCatFriendly) => {
  switch (isCatFriendly) {
    case IsCatFriendly.Yes:
      return true
    case IsCatFriendly.No:
      return false
    case IsCatFriendly.Null:
      return null
  }
}

const getIsCatFriendlyEnum = (isCatFriendly: Boolean | null) => {
  switch (isCatFriendly) {
    case true:
      return IsCatFriendly.Yes
    case false:
      return IsCatFriendly.No
    default:
      return IsCatFriendly.Null
  }
}

const dogHelper = {
  getSizeText,
  getIsSpayedOrNeuteredBoolean,
  getIsSpayedOrNeuteredEnum,
  getIsCatFriendlyBoolean,
  getIsCatFriendlyEnum,
}

export default dogHelper
