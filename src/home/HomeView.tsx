import { ReactElement } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import InstructionsSubview from './InstructionsSubview'

export default function HomeView(): ReactElement {
  return (
    <Container>
      <Box height={70} />
      <InstructionsSubview />
      <Box height={70} />
    </Container>
  )
}
