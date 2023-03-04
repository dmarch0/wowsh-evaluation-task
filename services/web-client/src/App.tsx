import React from 'react'
import { RecoilRoot } from 'recoil'
import { ShipListPage } from 'components/ShipListPage'

import 'normalize.css'
import 'styles/theme.scss'

const App: React.FC = () => (
  <RecoilRoot>
    <ShipListPage />
  </RecoilRoot>
)

export default App
