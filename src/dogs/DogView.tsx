import { ReactElement } from 'react'

import DogList from './DogList'
import { Dog } from './types'

type Props = {
  dogs: Dog[]
}

export default function DogView({ dogs }: Props): ReactElement {
  return <DogList dogs={dogs} />
}
