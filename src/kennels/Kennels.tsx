import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import dogService from '../services/dogService'
import { Dog } from '../types/dogType'
import ErrorMessage from '../misc/ErrorMessage'
import Loading from '../misc/Loading'

const groupBy = (array: any[], field: string) => {
  return array.reduce((result, currentValue) => {
    if (!result[currentValue[field]]) {
      result[currentValue[field]] = []
    }
    result[currentValue[field]].push(currentValue)

    return result
  }, {})
}

const comparator = (a: string, b: string) => {
  return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
}

export default function Kennels(): ReactElement {
  const dogs = useQuery(['dogs'], () => dogService.getAll())

  if (dogs.data) {
    const dogsGroupedByKennel = groupBy(dogs.data, 'kennel')

    const entries: [string, Dog[]][] = Object.entries(dogsGroupedByKennel)

    return (
      <>
        {entries
          .sort((a, b) => comparator(a[0], b[0]))
          .map((entry) => (
            <Accordion key={entry[0]} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" fontWeight={500}>
                  {entry[0]}
                </Typography>
              </AccordionSummary>
              {entry[1].map((dog) => (
                <AccordionDetails key={dog.id}>
                  <Typography variant="body2" textAlign="center">
                    {dog.name}
                  </Typography>
                </AccordionDetails>
              ))}
            </Accordion>
          ))}
      </>
    )
  }

  if (dogs.error) {
    return <ErrorMessage error={dogs.error} />
  }

  return <Loading />
}
