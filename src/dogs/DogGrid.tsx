import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Grid from '@mui/material/Unstable_Grid2'

import dogService from '../services/dogService.ts'
import DogCard from './DogCard.tsx'
import { DogSortField } from '../types/dogType.ts'
import { SortOrder } from '../types/utilType.ts'
import ErrorMessage from '../misc/ErrorMessage.tsx'
import Loading from '../misc/Loading.tsx'

type Props = {
  sortField: DogSortField
  sortOrder: SortOrder
  searchField: string
}

export default function DogGrid({
  sortField,
  sortOrder,
  searchField,
}: Props): ReactElement {
  const dogs = useQuery(['dogs', sortField, sortOrder, searchField], () =>
    dogService.getAll(sortField, sortOrder, searchField)
  )

  if (dogs.data) {
    return (
      <Grid container spacing={2} padding={2}>
        {dogs.data.map((dog) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={dog.id}>
            <DogCard dog={dog} />
          </Grid>
        ))}
      </Grid>
    )
  }

  if (dogs.error) {
    return <ErrorMessage error={dogs.error} />
  }

  return <Loading />
}
