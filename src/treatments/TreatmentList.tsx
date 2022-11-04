import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'

import treatmentService from '../services/treatmentService'
import ErrorMessage from '../misc/ErrorMessage'
import Loading from '../misc/Loading'

export default function TreatmentList(): ReactElement {
  const treatments = useQuery(['treatments'], () => treatmentService.getAll())

  if (treatments.data) {
    console.log(treatments.data)
    return <></>
  }

  if (treatments.error) {
    return <ErrorMessage error={treatments.error} />
  }

  return <Loading />
}
