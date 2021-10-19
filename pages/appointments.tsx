import { FC } from 'react'

import FallBackBlock from '../components/organisms/fallBackBlock'
import { DashboardLayout } from '../layouts/dashboardLayouts'

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
