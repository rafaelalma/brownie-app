import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMonth, getYear, parseISO } from 'date-fns'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'
import MaleRoundedIcon from '@mui/icons-material/MaleRounded'
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded'
import CakeRoundedIcon from '@mui/icons-material/CakeRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import dogService from '../dogService'
import dogHelper from '../dogHelper'
import { Sex } from '../dogTypes'

export default function DogDetail() {
  const params = useParams()
  const id = params.id

  if (!id) {
    throw new Error('route must have an id')
  }

  const dog = useQuery(['dog', id], () => dogService.getById(id))

  if (dog.data) {
    const {
      birthDate,
      breed,
      comments,
      height,
      isCatFriendly,
      isSpayedOrNeutered,
      kennel,
      length,
      name,
      sex,
      size,
      weight,
      youtubeUrl,
      image,
    } = dog.data

    return (
      <Container>
        {image ? (
          <img height="358" src={image} alt={name} />
        ) : (
          <Skeleton variant="rectangular" height={358} />
        )}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <Typography variant="h2" fontSize={24} fontWeight={500}>
            {name}
          </Typography>
          {kennel && (
            <Chip
              label={kennel}
              color="primary"
              icon={<BorderAllRoundedIcon />}
            />
          )}
        </Stack>
        <List dense>
          <ListItem>
            <ListItemIcon>
              {sex === Sex.Male ? (
                <MaleRoundedIcon color="primary" />
              ) : sex === Sex.Female ? (
                <FemaleRoundedIcon color="secondary" />
              ) : null}
            </ListItemIcon>
            <ListItemText>{breed}</ListItemText>
          </ListItem>
          {size && (
            <ListItem>
              <ListItemText>{dogHelper.getSizeText(size)}</ListItemText>
            </ListItem>
          )}
          {birthDate && (
            <ListItem>
              <ListItemIcon>
                <CakeRoundedIcon />
              </ListItemIcon>
              <ListItemText>{`${getMonth(
                parseISO(birthDate.toString())
              )}/${getYear(parseISO(birthDate.toString()))}`}</ListItemText>
            </ListItem>
          )}
          {isSpayedOrNeutered !== null && (
            <ListItem>
              <ListItemIcon>
                {isSpayedOrNeutered ? (
                  <CheckRoundedIcon htmlColor="green" />
                ) : (
                  <CloseRoundedIcon htmlColor="red" />
                )}
              </ListItemIcon>
              <ListItemText>Castrado</ListItemText>
            </ListItem>
          )}
          {(height || length || weight) && (
            <ListItem>
              <ListItemText>
                {height && `Altura: ${height} cm`}
                {height && <br />}
                {length && `Longitud: ${length} cm`}
                {length && <br />}
                {weight && `Peso: ${weight} kg`}
              </ListItemText>
            </ListItem>
          )}
          {isCatFriendly !== null && (
            <ListItem>
              <ListItemIcon>
                {isCatFriendly ? (
                  <CheckRoundedIcon htmlColor="green" />
                ) : (
                  <CloseRoundedIcon htmlColor="red" />
                )}
              </ListItemIcon>
              <ListItemText>Gatos</ListItemText>
            </ListItem>
          )}
        </List>
        {comments && (
          <Typography variant="body1" padding={2}>
            <strong>Comentarios:</strong> {comments}
          </Typography>
        )}
        {youtubeUrl && (
          <Link
            href={youtubeUrl}
            variant="body1"
            fontWeight={500}
            underline="none"
            padding={2}
          >
            YouTube
          </Link>
        )}
        <Box height={70} />
      </Container>
    )
  }

  if (dog.error) {
    return (
      <Typography
        variant="body1"
        fontSize={24}
        fontWeight={500}
        textAlign="center"
        padding={2}
      >{`An error has occurred: ${
        dog.error instanceof Error ? dog.error.message : ''
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
