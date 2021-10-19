import { FC } from 'react'

import { DashboardLayout } from '../layouts/dashboardLayouts'
import { SummaryCard } from '../components/summaryCard'
import { SummaryChart } from '../components/summaryChart'

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
      <div className="chart-wrapper">
        {chartData.map(chart => (
          <div key={chart.summaryTitle} className="chart-card-wrapper">
            <SummaryChart {...chart} />
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

      .chart-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
      }

      .chart-wrapper .chart-card-wrapper {
        width: 48%;
        margin-bottom: 30px;
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

        .chart-wrapper {
          flex-direction: column;
        }

        .chart-wrapper .chart-card-wrapper {
          width: 100%;
          margin-bottom: 15px;
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

const chartData = [
  {
    summaryValue: '$ 112,174',
    summaryTitle: 'Income in current month',
    chart: {
      verticalLabels: ['', '1 June', '8 July', '16 Augt', '24 Sept', '15 Oct'],
      horizontalData: [58000, 48000, 105000, 33000, 61000, 42000],
      lineColor: "#336CFB",
      pointColor: "#A9C1FD",
      stepSize: 20000,
    }
  },
  {
    summaryValue: '5,210',
    summaryTitle: 'Total Number of Appointment',
    chart: {
      verticalLabels: ['', '24 April', '26 May', '27 June', '28 July', '29 Aug', '30 Sept', '15 Oct'],
      horizontalData: [2200, 3400, 1700, 2800, 2050, 4800, 850, 2650],
      lineColor: "#FAC032",
      pointColor: "#FCDF98",
      stepSize: 1000
    }
  }
]
