import { ReactElement } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function NotFoundView(): ReactElement {
  return (
    <Container>
      <Box height={70} />
      <Typography
        variant="body1"
        fontSize={24}
        fontWeight={500}
        textAlign="center"
        padding={2}
      >
        404
      </Typography>
      <Box height={70} />
    </Container>
  )
}
