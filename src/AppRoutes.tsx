import { ReactElement } from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import HomeView from './home/HomeView'
import DogView from './dogs/DogView'
import DogGridSubview from './dogs/DogGridSubview'
import DogAddForm from './dogs/DogAddForm'
import DogDetail from './dogs/DogDetail'
import KennelView from './kennels/KennelView'
import KennelSubview from './kennels/KennelSubview'
import TreatmentView from './treatments/TreatmentView'
import TreatmentsSubview from './treatments/TreatmentsSubview'
import ReportView from './reports/ReportView'
import UnderConstruction from './misc/UnderConstruction'
import NotFoundView from './misc/NotFoundView'
import { useUser } from './context/AuthenticationContext'
import userHelper from './helpers/userHelper'

export default function AppRoutes(): ReactElement {
  const user = useUser()
  const isCoordinator = userHelper.isCoordinator(user)

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomeView />} />
        <Route path="dogs" element={<DogView />}>
          <Route index element={<DogGridSubview />} />
          <Route
            path="add"
            element={
              isCoordinator ? <DogAddForm /> : <Navigate replace to="/dogs" />
            }
          />
          <Route path=":id" element={<DogDetail />} />
        </Route>
        <Route path="kennels" element={<KennelView />}>
          <Route index element={<KennelSubview />} />
        </Route>
        <Route path="treatments" element={<TreatmentView />}>
          <Route index element={<TreatmentsSubview />} />
        </Route>
        <Route path="reports" element={<ReportView />}>
          <Route index element={<UnderConstruction />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  )
}
