import { ReactElement } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'

export default function AppBottomNavigation(): ReactElement {
  const location = useLocation()
  const navigate = useNavigate()

  const pathnameParts = location.pathname.split('/')
  const lastPathnamePart = pathnameParts[1]

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={lastPathnamePart}
        onChange={(_event, value) => {
          navigate(value)
        }}
      >
        <BottomNavigationAction
          label="Inicio"
          icon={<HomeRoundedIcon />}
          value=""
        />
        <BottomNavigationAction
          label="Listado"
          icon={<PetsRoundedIcon />}
          value="dogs"
        />
        <BottomNavigationAction
          label="Jaulas"
          icon={<BorderAllRoundedIcon />}
          value="kennels"
        />
        <BottomNavigationAction
          label="Tratamientos"
          icon={<LocalHospitalRoundedIcon />}
          value="treatments"
        />
        <BottomNavigationAction
          label="Informes"
          icon={<ArticleRoundedIcon />}
          value="reports"
        />
      </BottomNavigation>
    </Paper>
  )
}
