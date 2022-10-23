import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import dogService from '../services/dogService'
import { Dog, DogGroupField } from '../types/dogType'
import ErrorMessage from '../misc/ErrorMessage'
import Loading from '../misc/Loading'

export default function Kennels(): ReactElement {
  const dogs = useQuery(['dogs'], () =>
    dogService.getAllGrouped(DogGroupField.Kennel)
  )

  if (dogs.data) {
    const entries: [string, Dog[]][] = Object.entries(dogs.data)

    return (
      <>
        {entries.map((entry) => (
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
