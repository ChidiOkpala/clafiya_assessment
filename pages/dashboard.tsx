import { FC } from 'react'

import { DashboardLayout } from '../layouts/dashboardLayouts'

const Dashboard: FC = () => (
  <div>
    <DashboardLayout>
      
    </DashboardLayout>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Dashboard