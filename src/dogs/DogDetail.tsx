import { ReactElement, useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { format } from 'date-fns'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'
import MaleRoundedIcon from '@mui/icons-material/MaleRounded'
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded'
import CakeRoundedIcon from '@mui/icons-material/CakeRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'

import dogService from '../services/dogService.ts'
import dogHelper from '../helpers/dogHelper.ts'
import { Sex } from '../types/dogType.ts'
import dogImage from './dogImage.jpg'
import ErrorMessage from '../misc/ErrorMessage.tsx'
import Loading from '../misc/Loading.tsx'
import { useUser } from '../context/AuthenticationContext.tsx'
import userHelper from '../helpers/userHelper.ts'
import { fabStyles } from '../styles.ts'

export default function DogDetail(): ReactElement {
  const user = useUser()
  const isCoordinator = userHelper.isCoordinator(user)

  const navigate = useNavigate()

  const params = useParams()
  const { id } = params

  if (!id) {
    throw new Error('route must have an id')
  }

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const queryClient = useQueryClient()

  const handleMutationSuccess = () => {
    queryClient.invalidateQueries(['dogs'])

    navigate('/dogs')
  }

  const mutation = useMutation((dogId: string) => dogService.del(dogId), {
    onSuccess: handleMutationSuccess,
  })

  const dog = useQuery(['dog', id], () => dogService.getById(id))

  const handleDeleteClick = () => {
    mutation.mutate(id)
  }

  const handleEditClick = useCallback(() => navigate('edit'), [navigate])

  const handleOpenDeleteDialog = () => setOpenDeleteDialog(true)
  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false)

  const actions = useMemo(
    () => [
      {
        icon: <DeleteForeverRoundedIcon color="error" />,
        name: 'Borrar',
        onClick: handleOpenDeleteDialog,
      },
      {
        icon: <EditRoundedIcon />,
        name: 'Editar',
        onClick: handleEditClick,
      },
    ],
    [handleEditClick]
  )

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
    } = dog.data

    let sexIcon: ReactElement | null = null
    switch (sex) {
      case Sex.Male:
        sexIcon = <MaleRoundedIcon color="primary" />
        break
      case Sex.Female:
        sexIcon = <FemaleRoundedIcon color="primary" />
        break
    }

    return (
      <>
        <Box sx={{ height: 358 }}>
          <img
            width="100%"
            height="100%"
            style={{ objectFit: 'contain' }}
            src={dogImage}
            alt="perro dibujado a mano"
          />
        </Box>
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
            <ListItemIcon>{sexIcon}</ListItemIcon>
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
              <ListItemText>
                {format(new Date(birthDate), 'dd/MM/yyyy')}
              </ListItemText>
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
            target="_blank"
            variant="body1"
            fontWeight={500}
            underline="none"
            padding={2}
          >
            YouTube
          </Link>
        )}
        {isCoordinator && (
          <>
            <SpeedDial
              ariaLabel="dog-detail-speed-dial"
              sx={fabStyles}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.onClick}
                />
              ))}
            </SpeedDial>
            <Dialog
              open={openDeleteDialog}
              onClose={handleCloseDeleteDialog}
              aria-labelledby="delete-dialog-title"
              aria-describedby="delete-dialog-description"
            >
              <DialogTitle id="delete-dialog-title">
                ¿Borrar al perro {name}?
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="delete-dialog-description">
                  Esta acción no puede ser deshecha.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDeleteClick}>Borrar</Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </>
    )
  }

  if (dog.error) {
    return <ErrorMessage error={dog.error} />
  }

  return <Loading />
}
