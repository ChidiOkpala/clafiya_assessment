import { FC } from 'react'

import { DashboardLayout } from '../layouts/dashboardLayouts'
import { SummaryBlock } from '../components/organisms/summaryBlock'
import { ChartBlock } from '../components/organisms/chartBlock'
import { TableBlock } from '../components/organisms/tableBlock'

const Dashboard: FC = () => (
  <DashboardLayout>
    <SummaryBlock />
    <ChartBlock />
    <TableBlock />

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
  </DashboardLayout>
)

export default Dashboard
