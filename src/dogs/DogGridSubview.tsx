import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { SelectChangeEvent } from '@mui/material'

import { DogSortField } from '../types/dogType'
import { SortOrder } from '../types/utilType'
import DogGrid from './DogGrid'

export default function DogGridSubview() {
  const [sortField, setSortField] = useState(DogSortField.Name)
  const [sortOrder, setSortOrder] = useState(SortOrder.Ascending)

  const handleSortFieldChange = (event: SelectChangeEvent<DogSortField>) => {
    setSortField(event.target.value as DogSortField)
  }

  const handleSortOrderChange = (event: SelectChangeEvent<SortOrder>) => {
    setSortOrder(event.target.value as SortOrder)
  }
  return (
    <>
      <Paper
        sx={{
          position: 'sticky',
          top: 60,
          left: 0,
          right: 0,
          zIndex: 1,
          padding: 2,
          paddingTop: 2.5,
        }}
        elevation={3}
      >
        <Stack direction="row" spacing={1}>
          <FormControl fullWidth size="small">
            <InputLabel id="sort-field">Ordenar por:</InputLabel>
            <Select
              labelId="sort-field"
              id="sort-field"
              value={sortField}
              label="Ordenar por:"
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
      <DogGrid sortField={sortField} sortOrder={sortOrder} />
    </>
  )
}
