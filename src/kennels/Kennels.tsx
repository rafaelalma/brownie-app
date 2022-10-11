import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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

const comparator = (a: string, b: string) => {
  return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
}

export default function Kennels(): ReactElement {
  const dogs = useQuery(['dogs'], dogService.getAll)

  if (dogs.data) {
    const dogsGroupedByKennel = groupBy(dogs.data, 'kennel')

    const entries: [string, Dog[]][] = Object.entries(dogsGroupedByKennel)

    return (
      <Container>
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
        <Box height={70} />
      </Container>
    )
  }

  if (dogs.error) {
    return (
      <Typography
        variant="body1"
        fontSize={24}
        fontWeight={500}
        textAlign="center"
        padding={2}
      >{`An error has occurred: ${
        dogs.error instanceof Error ? dogs.error.message : ''
      }`}</Typography>
    )
  }

  return (
    <Typography
      variant="body1"
      fontSize={24}
      fontWeight={500}
      textAlign="center"
      padding={2}
    >
      Cargando...
    </Typography>
  )
}
