import { ReactElement } from 'react'
import Container from '@mui/material/Container'

import LoginForm from './LoginForm'

export default function LoginView(): ReactElement {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}
