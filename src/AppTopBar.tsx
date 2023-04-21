import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

import { useSetUser } from './context/AuthenticationContext'
import { LOCAL_STORAGE_USER_KEY } from './constants'

export default function AppTopBar() {
  const setUser = useSetUser()

  const handleLogoutClick = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    setUser(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="avatar"
            sx={{ mr: 2 }}
          >
            <AccountCircleRoundedIcon />
          </IconButton>
          <Typography
            variant="h1"
            fontSize={24}
            fontWeight={500}
            textAlign="center"
            sx={{ flexGrow: 1 }}
          >
            Módulo Cachorros
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="logout"
            onClick={handleLogoutClick}
          >
            <LogoutRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
