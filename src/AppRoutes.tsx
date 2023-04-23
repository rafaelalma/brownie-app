import { ReactElement } from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import HomeView from './home/HomeView.tsx'
import DogView from './dogs/DogView.tsx'
import DogList from './dogs/DogList.tsx'
import DogAddForm from './dogs/DogAddForm.tsx'
import DogDetailView from './dogs/DogDetailView.tsx'
import DogDetail from './dogs/DogDetail.tsx'
import DogEdit from './dogs/DogEdit.tsx'
import KennelView from './kennels/KennelView.tsx'
import KennelSubview from './kennels/KennelSubview.tsx'
import TreatmentView from './treatments/TreatmentView.tsx'
import TreatmentSubview from './treatments/TreatmentSubview.tsx'
import ReportView from './reports/ReportView.tsx'
import UnderConstruction from './misc/UnderConstruction.tsx'
import NotFoundView from './misc/NotFoundView.tsx'
import { useUser } from './context/AuthenticationContext.tsx'
import userHelper from './helpers/userHelper.ts'

export default function AppRoutes(): ReactElement {
  const user = useUser()
  const isCoordinator = userHelper.isCoordinator(user)

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomeView />} />
        <Route path="dogs" element={<DogView />}>
          <Route index element={<DogList />} />
          <Route
            path="add"
            element={
              isCoordinator ? <DogAddForm /> : <Navigate replace to="/dogs" />
            }
          />
          <Route path=":id" element={<DogDetailView />}>
            <Route index element={<DogDetail />} />
            <Route path="edit" element={<DogEdit />} />
          </Route>
        </Route>
        <Route path="kennels" element={<KennelView />}>
          <Route index element={<KennelSubview />} />
        </Route>
        <Route path="treatments" element={<TreatmentView />}>
          <Route index element={<TreatmentSubview />} />
        </Route>
        <Route path="reports" element={<ReportView />}>
          <Route index element={<UnderConstruction />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  )
}
