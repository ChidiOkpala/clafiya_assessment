import React, { FC} from 'react'
import { Line } from 'react-chartjs-2'
import { addCommasToNum } from '../../helpers/constant'

export interface ChartProps {
  verticalLabels: Array<string | number>
  horizontalData: number[]
  lineColor: string
  pointColor: string
  stepSize: number
  signToAppend?: string
}

export const Chart: FC<ChartProps> = ({
  verticalLabels,
  horizontalData,
  lineColor,
  pointColor,
  stepSize,
  signToAppend,
}) => {
  const data = {
    labels: verticalLabels,
    datasets: [
      {
        tension: 0.5,
        backgroundColor: '#ffffff',
        borderColor: lineColor,
        pointBorderColor: '#ffffff',
        pointBackgroundColor: pointColor,
        pointBorderWidth: 4,
        pointRadius: 6,
        data: horizontalData,
      }
    ]
  }

  const tickFontStyle = {
    family: 'Lato',
    weight: 'bold',
    lineHeight: '12px',
    size: 10
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          borderColor: '#ffffff',
          borderDash: [8, 4]
        },
        ticks: {
          stepSize,
          color: '#A0A4A8',
          font: tickFontStyle,
          callback: (value: number): string =>
            `${signToAppend || ''}${addCommasToNum(value)}`
        }
      },
      x: {
        grid: {
          color: '#ffffff'
        },
        ticks: {
          color: '#A0A4A8',
          font: tickFontStyle,
        }
      },
      'right-y-axis': {
        display: false 
      }
    }
  }

  return (
    <div className="chart-wrapper">
      <div className="desktop">
        <Line
          data={data}
          width={540}
          height={286}
          options={options}
        />
      </div>
      <div className="mobile">
        <Line
          data={data}
          width={400}
          height={350}
          options={options}
        />
      </div>

      <style jsx>{`
        .chart-wrapper {
          width: 100%;
        }

        .chart-wrapper .desktop {
          display: block;
        }

        .chart-wrapper .mobile {
          display: none;
        }

        @media screen and (max-width: 1100px) {
          .chart-wrapper .desktop {
            display: none;
          }

          .chart-wrapper .mobile {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
