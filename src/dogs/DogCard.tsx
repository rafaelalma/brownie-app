import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'

import { Dog } from '../types/dogType'
import dogImage from './dogImage.jpg'

type Props = {
  dog: Dog
}

export default function DogCard({ dog }: Props): ReactElement {
  const navigate = useNavigate()

  const { id, name, kennel } = dog

  const handleCardClick = () => {
    navigate(id)
  }

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <img height="358" src={dogImage} alt="perro dibujado a mano" />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="div">
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
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
