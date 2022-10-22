import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Grid from '@mui/material/Unstable_Grid2'

import dogService from '../services/dogService'
import DogCard from './DogCard'
import { DogSortField } from '../types/dogType'
import { SortOrder } from '../types/utilType'
import ErrorMessage from '../misc/ErrorMessage'
import Loading from '../misc/Loading'

type Props = {
  sortField: DogSortField
  sortOrder: SortOrder
}

export default function DogGrid({ sortField, sortOrder }: Props): ReactElement {
  const dogs = useQuery(['dogs', sortField, sortOrder], () =>
    dogService.getAll(sortField, sortOrder)
  )

  if (dogs.data) {
    return (
      <>
        <Grid container spacing={2} padding={2}>
          {dogs.data.map((dog) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={dog.id}>
              <DogCard dog={dog} />
            </Grid>
          ))}
        </Grid>
      </>
    )
  }

  if (dogs.error) {
    return <ErrorMessage error={dogs.error} />
  }

  return <Loading />
}
