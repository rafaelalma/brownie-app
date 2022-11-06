import { ReactElement } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded'
import { getHours } from 'date-fns'
import TreatmentGrid from './TreatmentGrid'

import { dividerStyles } from '../styles'

const MIDDAY_HOUR = 15
const STORE_MORNING_HOUR = 11
const STORE_AFTERNOON_HOUR = 18

export default function TreatmentSubview(): ReactElement {
  const today = new Date()
  const isMorning = getHours(today) < MIDDAY_HOUR

  return (
    <>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            Horario de recogida bolsas, pienso, lejía, escobas... del almacén:{' '}
            <strong>{`${
              isMorning ? STORE_MORNING_HOUR : STORE_AFTERNOON_HOUR
            }:00`}</strong>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            Comprobad todas las <strong>tolvas / cuencos</strong> +{' '}
            <strong>agua</strong>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            Revisad <strong>garrapatas</strong> (sobre todo en orejas, boca y
            patas)
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            Hay que <strong>hacer todas las curas</strong> aunque no toque sacar
            a esas jaulas en nuestro turno
          </ListItemText>
        </ListItem>
      </List>
      <Divider variant="middle" sx={dividerStyles} />
      <TreatmentGrid />
    </>
  )
}
