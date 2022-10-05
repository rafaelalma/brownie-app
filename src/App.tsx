import Typography from '@mui/material/Typography'

import DogView from './dogs/DogView'

export default function App() {
  return (
    <>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={500}
        textAlign="center"
        padding={2}
      >
        Brownie
      </Typography>
      <DogView />
    </>
  )
}
