import { ReactElement } from 'react'
import Typography from '@mui/material/Typography'

type Props = {
  error: unknown
}

export default function ErrorMessage({ error }: Props): ReactElement {
  return (
    <Typography
      variant="body1"
      fontSize={24}
      fontWeight={500}
      textAlign="center"
      padding={2}
    >{`An error has occurred: ${
      error instanceof Error ? error.message : ''
    }`}</Typography>
  )
}
