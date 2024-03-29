import { ReactElement, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import dogService from '../services/dogService.ts'
import { useUser } from '../context/AuthenticationContext.tsx'
import userHelper from '../helpers/userHelper.ts'
import ErrorMessage from '../misc/ErrorMessage.tsx'
import Loading from '../misc/Loading.tsx'
import DogEditForm from './DogEditForm.tsx'

export default function DogEdit(): ReactElement {
  const user = useUser()
  const isCoordinator = userHelper.isCoordinator(user)

  const params = useParams()
  const { id } = params

  if (!id) {
    throw new Error('route must have an id')
  }

  const navigate = useNavigate()

  const navigateToDetail = useCallback(
    () => navigate(`/dogs/${id}`),
    [id, navigate]
  )

  useEffect(() => {
    if (!isCoordinator) {
      navigateToDetail()
    }
  }, [isCoordinator, navigateToDetail])

  const dog = useQuery(['dog', id], () => dogService.getById(id), {
    staleTime: Infinity,
  })

  let content: ReactElement

  if (dog.data) {
    content = <DogEditForm dog={dog.data} onMutationSucces={navigateToDetail} />
  } else if (dog.error) {
    content = <ErrorMessage error={dog.error} />
  } else {
    content = <Loading />
  }

  return (
    <Stack spacing={2}>
      <Box sx={{ height: 675 }}>{content}</Box>
      <Button
        variant="outlined"
        color="error"
        onClick={navigateToDetail}
        fullWidth
      >
        Cancelar
      </Button>
    </Stack>
  )
}
