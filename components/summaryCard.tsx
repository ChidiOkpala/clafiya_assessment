import { FC } from 'react'
import Image from 'next/image'

import { Card } from './card'
import { MenuText } from './menuText'

interface SummaryCardProps {
  image: string
  title: string
  value: string
}

export const SummaryCard: FC<SummaryCardProps> = ({
  image,
  title,
  value
}) => (
  <Card>
    <div className="summary-card-wrapper">
      <div className="image-wrapper">
        <Image src={image} width="40px" height="40px" objectFit="contain" />
      </div>
      <div className="data-wrapper">
        <MenuText text={title} />
        <div className="value">{value}</div>
      </div>
    </div>

    <style jsx>{`
      .summary-card-wrapper {
        display: flex;
      }

      .summary-card-wrapper .image-wrapper {
        object-fit: scale-down;
        margin-right: 24px;
      }

      .summary-card-wrapper .date-wrapper {
        display: flex;
        flex-direction: column;
      }

      .summary-card-wrapper .data-wrapper .value {
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #0A459F;
        margin-top: 4px;
      }
    `}</style>
  </Card>
)
