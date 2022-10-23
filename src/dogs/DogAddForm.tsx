import { ReactElement, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

import { Sex, Size } from '../types/dogType'
import { dividerFormStyles } from '../styles'

export default function DogAddForm(): ReactElement {
  const [name, setName] = useState('')
  const [kennel, setKennel] = useState('')
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [breed, setBreed] = useState('')
  const [sex, setSex] = useState<Sex | null>(null)
  const [comments, setComments] = useState('')
  const [isSpayedOrNeutered, setIsSpayedOrNeutered] = useState<boolean | null>(
    null
  )
  const [height, setHeight] = useState<number | null>(null)
  const [length, setLength] = useState<number | null>(null)
  const [weight, setWeight] = useState<number | null>(null)
  const [isCatFriendly, setIsCatFriendly] = useState<boolean | null>(null)
  const [size, setSize] = useState<Size | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const handleNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value)
  }

  const handleKennelChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setKennel(event.target.value)
  }

  const handleDogSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleDogSubmit}>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <OutlinedInput
          id="name"
          label="Nombre"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
          required
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel htmlFor="kennel">Chenil</InputLabel>
        <OutlinedInput
          id="kennel"
          label="Chenil"
          placeholder="Chenil"
          value={kennel}
          onChange={handleKennelChange}
        />
      </FormControl>
      <Divider sx={dividerFormStyles} />
      <Button type="submit" variant="contained" fullWidth>
        Añadir perro
      </Button>
    </form>
  )
}
