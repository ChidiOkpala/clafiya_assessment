import { FC } from 'react'

interface CardProps {
  useSmallMobilePadding?: boolean
}

export const Card: FC<CardProps> = ({
  children,
  useSmallMobilePadding
}) => (
  <div className={`card-wrapper${
    useSmallMobilePadding ? ' small-padding-wrapper' : ''
  }`}>
    {children}
    
    <style jsx>{`
      .card-wrapper {
        background: #FFFFFF;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        border-radius: 8px;
        padding: 24px;
      }

      @media screen and (max-width: 750px) {
        .small-padding-wrapper {
          padding: 15px;
        }
      }
    `}</style>
  </div>
)
