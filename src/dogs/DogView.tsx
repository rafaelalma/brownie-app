import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'

import DogGrid from './DogGrid'
import dogService from './service'
import Typography from '@mui/material/Typography'

export default function DogView(): ReactElement {
  const dogs = useQuery(['dogs'], dogService.getAll)

  if (dogs.data) {
    return <DogGrid dogs={dogs.data} />
  }
  if (dogs.error) {
    return (
      <Typography
        variant="h4"
        textAlign="center"
        padding={2}
      >{`An error has occurred: ${
        dogs.error instanceof Error ? dogs.error.message : ''
      }`}</Typography>
    )
  }

  return (
    <Typography variant="h4" textAlign="center" padding={2}>
      Loading...
    </Typography>
  )
}
