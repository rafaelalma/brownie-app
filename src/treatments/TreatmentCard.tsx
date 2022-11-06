import { ReactElement } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/material'

import { Treatment } from '../types/treatmentType'

type Props = {
  treatment: Treatment
}

const listStyle: SxProps = {
  pt: 0,
  pb: 0,
}

const getStepText = (medication: string | null, description: string | null) => {
  if (medication && description) {
    return `${medication}: ${description}`
  } else if (medication) {
    return medication
  } else if (description) {
    return description
  } else {
    return ''
  }
}

export default function TreatmentCard({ treatment }: Props): ReactElement {
  const { parts, dog } = treatment

  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {dog.kennel && (
            <Chip
              label={dog.kennel}
              color="primary"
              icon={<BorderAllRoundedIcon />}
            />
          )}
          <Typography variant="h5" component="div">
            {dog.name}
          </Typography>
        </Stack>
        <List>
          {parts.map((part) => (
            <ListItem key={part.id} sx={listStyle}>
              <Box>
                <ListItemText>{part.name}</ListItemText>
                <List dense sx={listStyle}>
                  {part.steps.map((step) => (
                    <ListItem key={step.id} sx={listStyle}>
                      <ListItemText>
                        {getStepText(step.medication, step.description)}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
