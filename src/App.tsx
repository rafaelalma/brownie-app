import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

import DogView from './dogs/DogView'
import dogService from './services/dogs'
import { Dog } from './dogs/types'

function App() {
  const [dogs, setDogs] = useState<Dog[] | undefined>()

  useEffect(() => {
    dogService.getAll().then((response) => {
      const data: Dog[] = response.data
      setDogs(data)
    })
  }, [])

  return (
    <>
      <Typography variant="h1">Brownie</Typography>
      <Typography variant="h2">by rafaelalma</Typography>
      {dogs && <DogView dogs={dogs} />}
    </>
  )
}

export default App
