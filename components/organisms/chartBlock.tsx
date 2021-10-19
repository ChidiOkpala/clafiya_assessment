import { FC } from 'react'

import { chartData } from '../../helpers/constant'
import { SummaryChart } from '../molecules/summaryChart'

export const ChartBlock: FC = () => (
  <div className="chart-wrapper">
    {chartData.map(chart => (
      <div key={chart.summaryTitle} className="chart-card-wrapper">
        <SummaryChart {...chart} />
      </div>
    ))}

    <style jsx>{`
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

      @media screen and (max-width: 500px) {
        .chart-wrapper {
          flex-direction: column;
        }

        .chart-wrapper .chart-card-wrapper {
          width: 100%;
          margin-bottom: 15px;
        }
      }
    `}</style>
  </div>
)
