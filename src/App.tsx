import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded'
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'

import HomeView from './home/HomeView'
import DogView from './dogs/DogView'
import DogGrid from './dogs/DogGrid'
import DogDetail from './dogs/DogDetail'
import KennelView from './kennels/KennelView'
import Kennels from './kennels/Kennels'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const pathnameParts = location.pathname.split('/')
  const lastPathnamePart = pathnameParts[1]

  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomeView />} />
          <Route path="dogs" element={<DogView />}>
            <Route index element={<DogGrid />} />
            <Route path=":id" element={<DogDetail />} />
          </Route>
          <Route path="kennels" element={<KennelView />}>
            <Route index element={<Kennels />} />
          </Route>
          <Route path="treatments" element={null} />
          <Route path="reports" element={null} />
          <Route path="*" element={null} />
        </Route>
      </Routes>
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
    </>
  )
}
