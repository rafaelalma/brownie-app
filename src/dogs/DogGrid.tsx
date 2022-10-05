import { ReactElement } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import { Dog } from './types'
import DogCard from './DogCard'

type Props = {
  dogs: Dog[]
}

export default function DogGrid({ dogs }: Props): ReactElement {
  return (
    <Grid container spacing={2} padding={2}>
      {dogs.map((dog) => (
        <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={dog.id}>
          <DogCard dog={dog} />
        </Grid>
      ))}
    </Grid>
  )
}
