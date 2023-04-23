import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import debounce from 'lodash.debounce'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Fab from '@mui/material/Fab'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { SelectChangeEvent } from '@mui/material'

import { DogSortField } from '../types/dogType.ts'
import { SortOrder } from '../types/utilType.ts'
import DogGrid from './DogGrid.tsx'
import { fabStyles, paperStyles } from '../styles.ts'
import { useUser } from '../context/AuthenticationContext.tsx'
import userHelper from '../helpers/userHelper.ts'
import { DEBOUNCED_SEARCH_TIME } from '../constants.ts'

export default function DogList() {
  const user = useUser()
  const isCoordinator = userHelper.isCoordinator(user)

  const navigate = useNavigate()

  const [sortField, setSortField] = useState(DogSortField.Name)
  const [sortOrder, setSortOrder] = useState(SortOrder.Ascending)
  const [searchField, setSearchField] = useState('')

  const handleSortFieldChange = (event: SelectChangeEvent<DogSortField>) => {
    setSortField(event.target.value as DogSortField)
  }

  const handleSortOrderChange = (event: SelectChangeEvent<SortOrder>) => {
    setSortOrder(event.target.value as SortOrder)
  }

  const handleSearchFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchField(event.target.value)
  }

  const debouncedSearch = useMemo(
    () => debounce(handleSearchFieldChange, DEBOUNCED_SEARCH_TIME),
    []
  )

  useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch])

  const handleAddDogClick = () => {
    navigate('add')
  }

  return (
    <>
      <Paper sx={paperStyles} elevation={3}>
        <TextField
          id="search-field"
          label="Buscar"
          onChange={debouncedSearch}
          size="small"
          fullWidth
        />
        <Stack direction="row" spacing={1} mt={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="sort-field">Ordenar por</InputLabel>
            <Select
              labelId="sort-field"
              id="sort-field"
              value={sortField}
              label="Ordenar por"
              onChange={handleSortFieldChange}
            >
              <MenuItem value={DogSortField.CreateTime}>
                Tiempo de creación
              </MenuItem>
              <MenuItem value={DogSortField.UpdateTime}>
                Tiempo de actualización
              </MenuItem>
              <MenuItem value={DogSortField.Name}>Nombre</MenuItem>
              <MenuItem value={DogSortField.BirthDate}>
                Fecha de nacimiento
              </MenuItem>
              <MenuItem value={DogSortField.Height}>Altura</MenuItem>
              <MenuItem value={DogSortField.Length}>Longitud</MenuItem>
              <MenuItem value={DogSortField.Weight}>Peso</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <Select
              value={sortOrder}
              onChange={handleSortOrderChange}
              inputProps={{ 'aria-label': 'sort-order' }}
            >
              <MenuItem value={SortOrder.Ascending}>Ascendente</MenuItem>
              <MenuItem value={SortOrder.Descending}>Descendente</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>
      <DogGrid
        sortField={sortField}
        sortOrder={sortOrder}
        searchField={searchField}
      />
      {isCoordinator && (
        <Fab
          color="primary"
          aria-label="add-dog"
          onClick={handleAddDogClick}
          size="large"
          sx={fabStyles}
        >
          <AddCircleOutlineRoundedIcon fontSize="large" />
        </Fab>
      )}
    </>
  )
}
