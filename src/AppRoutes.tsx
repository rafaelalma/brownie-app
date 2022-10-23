import { ReactElement } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import HomeView from './home/HomeView'
import DogView from './dogs/DogView'
import DogGridSubview from './dogs/DogGridSubview'
import DogDetail from './dogs/DogDetail'
import KennelView from './kennels/KennelView'
import KennelSubview from './kennels/KennelSubview'
import TreatmentView from './treatments/TreatmentView'
import TreatmentsSubview from './treatments/TreatmentsSubview'
import ReportView from './reports/ReportView'
import UnderConstruction from './misc/UnderConstruction'
import NotFoundView from './misc/NotFoundView'

export default function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomeView />} />
        <Route path="dogs" element={<DogView />}>
          <Route index element={<DogGridSubview />} />
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
