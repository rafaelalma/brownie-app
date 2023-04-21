import { ReactElement } from 'react'
import Container from '@mui/material/Container'

import LoginForm from './LoginForm'
import { Typography } from '@mui/material'

export default function LoginView(): ReactElement {
  return (
    <Container>
      <Typography
        variant="h1"
        fontSize={24}
        fontWeight={500}
        p={2}
        textAlign="center"
      >
        Módulo Cachorros
      </Typography>
      <LoginForm />
    </Container>
  )
}
