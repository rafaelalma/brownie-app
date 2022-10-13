import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function ReportView(): ReactElement {
  return (
    <Container>
      <Box height={70} />
      <Outlet />
      <Box height={70} />
    </Container>
  )
}
