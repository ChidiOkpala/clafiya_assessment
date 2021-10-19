import { FC } from 'react'

import { Card } from '../atoms/card'
import { Chart, ChartProps } from '../atoms/chart'

export interface SummaryChartProps {
  chart: ChartProps
  summaryValue: string
  summaryTitle: string
}

export const SummaryChart: FC<SummaryChartProps> = ({
  chart,
  summaryValue,
  summaryTitle
}) => {
  return (
    <Card useSmallMobilePadding>
      <div className="summary-wrapper">
        <div className="value">{summaryValue}</div>
        <div className="title">{summaryTitle}</div>
      </div>
      <Chart {...chart} />

      <style jsx>{`
        .summary-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 20px;
        }

        .summary-wrapper .value {
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.2px;
          color: #25282B;
        }

        .summary-wrapper .title {
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.1px;
          color: #A0A4A8;
        }

        @media screen and (max-width: 800px) {
          .summary-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </Card>
  )
}
