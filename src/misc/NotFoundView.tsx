import { ReactElement } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function NotFoundView(): ReactElement {
  return (
    <Container>
      <Typography
        variant="body1"
        fontSize={24}
        fontWeight={500}
        textAlign="center"
        padding={2}
      >
        404
      </Typography>
    </Container>
  )
}
