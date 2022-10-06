import { Size } from './dogTypes'

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

const dogHelper = {
  getSizeText,
}

export default dogHelper
