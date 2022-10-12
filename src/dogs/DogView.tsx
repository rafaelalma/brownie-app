import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

export default function DogView(): ReactElement {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}
