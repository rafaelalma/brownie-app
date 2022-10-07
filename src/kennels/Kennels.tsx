import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import dogService from '../dogService'
import { Dog } from '../dogTypes'

const groupBy = (array: any[], field: string) => {
  return array.reduce((result, currentValue) => {
    if (!result[currentValue[field]]) {
      result[currentValue[field]] = []
    }
    result[currentValue[field]].push(currentValue)

    return result
  }, {})
}

export default function Kennels(): ReactElement {
  const dogs = useQuery(['dogs'], dogService.getAll)

  if (dogs.data) {
    const dogsGroupedByKennel = groupBy(dogs.data, 'kennel')

    const entries: [string, Dog[]][] = Object.entries(dogsGroupedByKennel)

    return (
      <Container>
        {entries.map((entry) => (
          <Accordion key={entry[0]}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1">{entry[0]}</Typography>
            </AccordionSummary>
            {entry[1].map((dog) => (
              <AccordionDetails key={dog.id}>
                <Typography variant="body2">{dog.name}</Typography>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Container>
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
