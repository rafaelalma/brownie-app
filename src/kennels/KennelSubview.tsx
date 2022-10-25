import { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { paperStyles } from '../styles'
import Kennels from './Kennels'
import { DEBOUNCED_SEARCH_TIME } from '../constants'

export default function KennelSubview() {
  const [searchField, setSearchField] = useState('')

  const handleSearchFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchField(event.target.value)
  }

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearchFieldChange, DEBOUNCED_SEARCH_TIME)
  }, [])

  useEffect(() => {
    return () => {
      return debouncedSearch.cancel()
    }
  })

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
      </Paper>
      <Kennels searchField={searchField} />
    </>
  )
}
