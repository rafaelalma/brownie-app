import { ReactElement } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import HomeView from './home/HomeView'
import DogView from './dogs/DogView'
import DogGrid from './dogs/DogGrid'
import DogDetail from './dogs/DogDetail'
import KennelView from './kennels/KennelView'
import Kennels from './kennels/Kennels'
import TreatmentView from './treatments/TreatmentView'
import ReportView from './reports/ReportView'
import UnderConstruction from './misc/UnderConstruction'
import NotFoundView from './misc/NotFoundView'

export default function AppRoutes(): ReactElement {
  return (
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
        <Route path="treatments" element={<TreatmentView />}>
          <Route index element={<UnderConstruction />} />
        </Route>
        <Route path="reports" element={<ReportView />}>
          <Route index element={<UnderConstruction />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  )
}
