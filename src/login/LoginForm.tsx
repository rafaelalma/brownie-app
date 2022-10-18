import { ReactElement, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'

import loginService from '../services/loginService'
import { useSetUser } from '../context/AuthenticationContext'
import dogService from '../services/dogService'
import { LOCAL_STORAGE_USER_KEY } from '../constants'

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

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={handleLogin} style={{ padding: '16px' }}>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="username">Usuario</InputLabel>
        <OutlinedInput
          id="username"
          label="Usuario"
          value={username}
          onChange={handleUsernameChange}
          required
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="password">Contraseña</InputLabel>
        <OutlinedInput
          id="password"
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          required
          startAdornment={
            <InputAdornment position="start">
              <PasswordRoundedIcon />
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
        <Divider sx={{ margin: 2 }} />
        <Button type="submit" variant="contained">
          Iniciar sesión
        </Button>
      </FormControl>
    </form>
  )
}
