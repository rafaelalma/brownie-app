import { ReactElement } from 'react'
import Typography from '@mui/material/Typography'

export default function UnderConstruction(): ReactElement {
  return (
    <Typography
      variant="body1"
      fontSize={24}
      fontWeight={500}
      textAlign="center"
      padding={2}
    >
      Próximamente...
    </Typography>
  )
}
