import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Grid from '@mui/material/Unstable_Grid2'

import treatmentService from '../services/treatmentService'
import TreatmentCard from './TreatmentCard'
import ErrorMessage from '../misc/ErrorMessage'
import Loading from '../misc/Loading'

export default function TreatmentGrid(): ReactElement {
  const treatments = useQuery(['treatments'], () => treatmentService.getAll())

  if (treatments.data) {
    return (
      <>
        <Grid container spacing={2} padding={2}>
          {treatments.data.map((treatment) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={treatment.id}>
              <TreatmentCard treatment={treatment} />
            </Grid>
          ))}
        </Grid>
      </>
    )
  }

  if (treatments.error) {
    return <ErrorMessage error={treatments.error} />
  }

  return <Loading />
}
