import { ReactElement } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'

import { Dog } from './types'

type Props = {
  dogs: Dog[]
}

export default function DogGrid({ dogs }: Props): ReactElement {
  return (
    <Grid container spacing={2} padding={2}>
      {dogs.map((dog) => (
        <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={dog.id}>
          <Card>
            <CardActionArea>
              {dog.image ? (
                <CardMedia
                  component="img"
                  height="358"
                  image={dog.image}
                  alt={dog.name}
                />
              ) : (
                <Skeleton variant="rectangular" height={358} />
              )}
            </CardActionArea>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" component="div">
                  {dog.name}
                </Typography>
                {dog.kennel && (
                  <Chip
                    label={dog.kennel}
                    color="primary"
                    icon={<BorderAllRoundedIcon />}
                    onClick={() => {}}
                  />
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
