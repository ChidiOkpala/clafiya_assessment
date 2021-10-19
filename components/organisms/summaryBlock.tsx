import { FC } from 'react'

import { summaryList } from '../../helpers/constant'
import { SummaryCard } from '../molecules/summaryCard'

export const SummaryBlock: FC = () => (
  <div className="summary-wrapper">
    {summaryList.map(summary => (
      <div className="summary-card-wrapper" key={summary.title}>
        <SummaryCard {...summary} />
      </div>
    ))}

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

      @media screen and (max-width: 1250px) {
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
  </div>
)
