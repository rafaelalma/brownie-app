import { ReactElement, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'

import loginService from '../services/loginService'
import { useSetUser } from '../context/AuthenticationContext'
import dogService from '../services/dogService'
import { LOCAL_STORAGE_USER_KEY } from '../constants'
import { dividerFormStyles } from '../styles'

export default function LoginForm(): ReactElement {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const setUser = useSetUser()

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value)
  }

  const handleShowPasswordClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleShowPasswordMouseDown = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user))
      setUser(user)
      dogService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch (error) {
      if (error instanceof Error) console.error(error.message)
    }
  }

  return (
    <form onSubmit={handleLoginSubmit} style={{ padding: '16px' }}>
      <FormControl required variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="username">Usuario</InputLabel>
        <OutlinedInput
          id="username"
          label="Usuario"
          placeholder="Usuario"
          value={username}
          onChange={handleUsernameChange}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl required variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="password">Contraseña</InputLabel>
        <OutlinedInput
          id="password"
          label="Contraseña"
          placeholder="Contraseña"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          startAdornment={
            <InputAdornment position="start">
              <LockOpenRoundedIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPasswordClick}
                onMouseDown={handleShowPasswordMouseDown}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOffRoundedIcon />
                ) : (
                  <VisibilityRoundedIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <Divider sx={dividerFormStyles} />
        <Button type="submit" variant="contained" fullWidth>
          Iniciar sesión
        </Button>
      </FormControl>
    </form>
  )
}
