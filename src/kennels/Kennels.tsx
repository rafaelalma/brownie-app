import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import dogService from '../services/dogService.ts'
import { Dog, DogGroupField } from '../types/dogType.ts'
import ErrorMessage from '../misc/ErrorMessage.tsx'
import Loading from '../misc/Loading.tsx'

type Props = {
  searchField: string
}

export default function Kennels({ searchField }: Props): ReactElement {
  const navigate = useNavigate()

  const dogs = useQuery(['dogs', searchField], () =>
    dogService.getAllGrouped(DogGroupField.Kennel, searchField)
  )

  const navigateToDog = (id: string) => {
    navigate(`/dogs/${id}`)
  }

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
            <AccordionDetails>
              <Stack>
                {entry[1].map((dog) => (
                  <Button
                    key={dog.id}
                    variant="text"
                    onClick={() => navigateToDog(dog.id)}
                  >
                    {dog.name}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
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
