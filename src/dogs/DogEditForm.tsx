import { ReactElement, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import esLocale from 'date-fns/locale/es'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Button from '@mui/material/Button'
import { SelectChangeEvent } from '@mui/material'

import {
  Dog,
  IsCatFriendly,
  IsSpayedOrNeutered,
  NewDog,
  Sex,
  Size,
} from '../types/dogType.ts'
import dogHelper from '../helpers/dogHelper.ts'
import { dividerFormStyles } from '../styles.ts'
import dogService from '../services/dogService.ts'

type Props = {
  dog: Dog
  onMutationSucces: () => void
}

export default function DogEditForm({
  dog,
  onMutationSucces,
}: Props): ReactElement {
  const [name, setName] = useState(dog.name)
  const [kennel, setKennel] = useState(dog.kennel ?? '')
  const [birthDate, setBirthDate] = useState<Date | null>(dog.birthDate)
  const [breed, setBreed] = useState(dog.breed ?? '')
  const [sex, setSex] = useState<Sex>(dog.sex ?? Sex.Null)
  const [comments, setComments] = useState(dog.comments ?? '')
  const [isSpayedOrNeutered, setIsSpayedOrNeutered] =
    useState<IsSpayedOrNeutered>(
      dogHelper.getIsSpayedOrNeuteredEnum(dog.isSpayedOrNeutered)
    )
  const [height, setHeight] = useState<number | null>(dog.height)
  const [length, setLength] = useState<number | null>(dog.length)
  const [weight, setWeight] = useState<number | null>(dog.weight)
  const [isCatFriendly, setIsCatFriendly] = useState<IsCatFriendly>(
    dogHelper.getIsCatFriendlyEnum(dog.isCatFriendly)
  )
  const [size, setSize] = useState<Size>(dog.size ?? Size.Null)
  const [youtubeUrl, setYoutubeUrl] = useState(dog.youtubeUrl ?? '')

  const queryClient = useQueryClient()

  const handleMutationSuccess = () => {
    queryClient.invalidateQueries(['dog', dog.id])

    onMutationSucces()
  }

  const mutation = useMutation(
    (newDog: NewDog) => dogService.update(dog.id, newDog),
    {
      onSuccess: handleMutationSuccess,
    }
  )

  const handleDogSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newDog: NewDog = {
      name,
      kennel,
      birthDate,
      breed,
      sex,
      comments,
      isSpayedOrNeutered:
        dogHelper.getIsSpayedOrNeuteredBoolean(isSpayedOrNeutered),
      height,
      length,
      weight,
      isCatFriendly: dogHelper.getIsCatFriendlyBoolean(isCatFriendly),
      size,
      youtubeUrl,
    }

    mutation.mutate(newDog)
  }

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

  const handleBirthDateChange = (newValue: Date | null) => {
    setBirthDate(newValue)
  }

  const handleBreedChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBreed(event.target.value)
  }

  const handleSexChange = (event: SelectChangeEvent<Sex>) => {
    setSex(event.target.value as Sex)
  }

  const handleIsSpayedOrNeuteredChange = (
    event: SelectChangeEvent<IsSpayedOrNeutered>
  ) => {
    setIsSpayedOrNeutered(event.target.value as IsSpayedOrNeutered)
  }

  const handleSizeChange = (event: SelectChangeEvent<Size>) => {
    setSize(event.target.value as Size)
  }

  const handleIsCatFriendly = (event: SelectChangeEvent<IsCatFriendly>) => {
    setIsCatFriendly(event.target.value as IsCatFriendly)
  }

  const handleWeightChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value) {
      setWeight(Number.parseFloat(event.target.value))
    } else {
      setWeight(null)
    }
  }

  const handleHeightChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value) {
      setHeight(Number.parseFloat(event.target.value))
    } else {
      setHeight(null)
    }
  }

  const handleLengthChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value) {
      setLength(Number.parseFloat(event.target.value))
    } else {
      setLength(null)
    }
  }

  const handleCommentsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setComments(event.target.value)
  }

  const handleYoutubeUrlChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setYoutubeUrl(event.target.value)
  }

  return (
    <form onSubmit={handleDogSubmit}>
      <FormControl required variant="outlined" fullWidth margin="dense">
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <OutlinedInput
          id="name"
          label="Nombre"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
          aria-describedby="name-helper-text"
        />
        <FormHelperText id="name-helper-text">
          El perro debe tener un nombre único
        </FormHelperText>
      </FormControl>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={0.5}
      >
        <FormControl variant="outlined">
          <InputLabel htmlFor="kennel">Chenil</InputLabel>
          <OutlinedInput
            id="kennel"
            label="Chenil"
            placeholder="Chenil"
            value={kennel}
            onChange={handleKennelChange}
          />
        </FormControl>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={esLocale}
        >
          <DatePicker
            label="Fecha de nacimiento"
            value={birthDate}
            onChange={handleBirthDateChange}
            renderInput={(params) => <TextField {...params} />}
            disableHighlightToday
            maxDate={new Date()}
            minDate={new Date('2015')}
          />
        </LocalizationProvider>
      </Stack>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel htmlFor="breed">Raza</InputLabel>
        <OutlinedInput
          id="breed"
          label="Raza"
          placeholder="Raza"
          value={breed}
          onChange={handleBreedChange}
        />
      </FormControl>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={0.5}
      >
        <FormControl fullWidth>
          <InputLabel id="sex">Sexo</InputLabel>
          <Select
            labelId="sex"
            id="sex"
            value={sex}
            label="Sexo"
            onChange={handleSexChange}
          >
            <MenuItem value={Sex.Null}>Indeterminado</MenuItem>
            <MenuItem value={Sex.Male}>Macho</MenuItem>
            <MenuItem value={Sex.Female}>Hembra</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="isSpayedOrNeutered">Castrado</InputLabel>
          <Select
            labelId="isSpayedOrNeutered"
            id="isSpayedOrNeutered"
            value={isSpayedOrNeutered}
            label="Castrado"
            onChange={handleIsSpayedOrNeuteredChange}
          >
            <MenuItem value={IsSpayedOrNeutered.Null}>Indeterminado</MenuItem>
            <MenuItem value={IsSpayedOrNeutered.Yes}>Sí</MenuItem>
            <MenuItem value={IsSpayedOrNeutered.No}>No</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={0.5}
      >
        <FormControl fullWidth>
          <InputLabel id="size">Tamaño</InputLabel>
          <Select
            labelId="size"
            id="size"
            value={size}
            label="Tamaño"
            onChange={handleSizeChange}
          >
            <MenuItem value={Size.Null}>Indeterminado</MenuItem>
            <MenuItem value={Size.VeryBig}>
              {dogHelper.getSizeText(Size.VeryBig)}
            </MenuItem>
            <MenuItem value={Size.Big}>
              {dogHelper.getSizeText(Size.Big)}
            </MenuItem>
            <MenuItem value={Size.BigMedium}>
              {dogHelper.getSizeText(Size.BigMedium)}
            </MenuItem>
            <MenuItem value={Size.Medium}>
              {dogHelper.getSizeText(Size.Medium)}
            </MenuItem>
            <MenuItem value={Size.MediumLittle}>
              {dogHelper.getSizeText(Size.MediumLittle)}
            </MenuItem>
            <MenuItem value={Size.Little}>
              {dogHelper.getSizeText(Size.Little)}
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="isCatFriendly">Gatos</InputLabel>
          <Select
            labelId="isCatFriendly"
            id="isCatFriendly"
            value={isCatFriendly}
            label="Gatos"
            onChange={handleIsCatFriendly}
          >
            <MenuItem value={IsCatFriendly.Null}>Indeterminado</MenuItem>
            <MenuItem value={IsCatFriendly.Yes}>Sí</MenuItem>
            <MenuItem value={IsCatFriendly.No}>No</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={0.5}
      >
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="weight">Peso</InputLabel>
          <OutlinedInput
            id="weight"
            label="Peso"
            placeholder="Peso"
            value={weight ?? ''}
            onChange={handleWeightChange}
            inputProps={{ type: 'number', min: '0', step: '0.1' }}
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="height">Altura</InputLabel>
          <OutlinedInput
            id="height"
            label="Altura"
            placeholder="Altura"
            type="number"
            value={height ?? ''}
            onChange={handleHeightChange}
            inputProps={{ type: 'number', min: '0', step: '0.1' }}
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="length">Longitud</InputLabel>
          <OutlinedInput
            id="length"
            label="Longitud"
            placeholder="Longitud"
            type="number"
            value={length ?? ''}
            onChange={handleLengthChange}
            inputProps={{ type: 'number', min: '0', step: '0.1' }}
          />
        </FormControl>
      </Stack>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel htmlFor="comments">Comentarios</InputLabel>
        <OutlinedInput
          id="comments"
          label="Comentarios"
          placeholder="Comentarios"
          multiline
          minRows={2}
          value={comments}
          onChange={handleCommentsChange}
          aria-describedby="comments-helper-text"
        />
        <FormHelperText id="comments-helper-text">
          Enfermedades, operaciones, licencias...
        </FormHelperText>
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel htmlFor="youtubeUrl">URL YouTube</InputLabel>
        <OutlinedInput
          id="youtubeUrl"
          label="URL YouTube"
          placeholder="URL YouTube"
          type="url"
          value={youtubeUrl}
          onChange={handleYoutubeUrlChange}
        />
      </FormControl>
      <Divider sx={dividerFormStyles} />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={mutation.isLoading}
      >
        Editar perro
      </Button>
    </form>
  )
}
