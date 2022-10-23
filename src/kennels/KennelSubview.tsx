import { useState } from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { paperStyles } from '../styles'
import Kennels from './Kennels'

export default function KennelSubview() {
  const [searchField, setSearchField] = useState('')

  const handleSearchFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchField(event.target.value)
  }

  return (
    <>
      <Paper sx={paperStyles} elevation={3}>
        <TextField
          id="search-field"
          label="Buscar"
          value={searchField}
          onChange={handleSearchFieldChange}
          size="small"
          fullWidth
        />
      </Paper>
      <Kennels searchField={searchField} />
    </>
  )
}
