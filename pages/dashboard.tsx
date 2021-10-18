import { FC } from 'react'

import { DashboardLayout } from '../layouts/dashboardLayouts'
import { SummaryCard } from '../components/summaryCard'

const Dashboard: FC = () => (
  <div>
    <DashboardLayout>
      <div className="summary-wrapper">
        {summaryList.map(summary => (
          <div className="summary-card-wrapper" key={summary.title}>
            <SummaryCard {...summary} />
          </div>
        ))}
      </div>
    </DashboardLayout>

    <style jsx>{`
      .summary-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 32px;
      }

      .summary-wrapper .summary-card-wrapper {
        width: 22%;
        min-width: 236px;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 750px) {
        .summary-wrapper .summary-card-wrapper {
          width: 48%;
        }
      }

      @media screen and (max-width: 500px) {
        .summary-wrapper .summary-card-wrapper {
          width: 100%;
          margin-bottom: 12px;
        }
      }
    `}</style>

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

const summaryList = [
  {
    title: 'Appointments',
    value: '213',
    image: '/assets/appointment-summary.png'
  },
  {
    title: 'New Patients',
    value: '104',
    image: '/assets/patient-summary.png'
  },
  {
    title: 'Interventions',
    value: '24',
    image: '/assets/intervention-summary.png'
  },
  {
    title: 'Clafiya’s Earnings',
    value: '$ 112,174',
    image: '/assets/earning-summary.png'
  }
]
