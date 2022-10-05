import { ReactElement } from 'react'

import DogGrid from './DogGrid'
import { Dog } from './types'

type Props = {
  dogs: Dog[]
}

export default function DogView({ dogs }: Props): ReactElement {
  return <DogGrid dogs={dogs} />
}
