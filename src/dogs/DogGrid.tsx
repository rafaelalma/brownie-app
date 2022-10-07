import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

import dogService from '../dogService'
import DogCard from './DogCard'

export default function DogGrid(): ReactElement {
  const dogs = useQuery(['dogs'], dogService.getAll)

  if (dogs.data) {
    return (
      <Grid container spacing={2} padding={2}>
        {dogs.data.map((dog) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={dog.id}>
            <DogCard dog={dog} />
          </Grid>
        ))}
      </Grid>
    )
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
