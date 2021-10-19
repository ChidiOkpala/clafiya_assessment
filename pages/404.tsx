import { FC } from 'react'

import { DashboardLayout } from '../layouts/dashboardLayouts'
import FallBackBlock from '../components/organisms/fallBackBlock'

const FallBack: FC = () => (
  <DashboardLayout>
    <FallBackBlock />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Lato', san-seriff;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </DashboardLayout>
)

export default FallBack
