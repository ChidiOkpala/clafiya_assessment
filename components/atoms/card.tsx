import { FC } from 'react'

interface CardProps {
  useSmallMobilePadding?: boolean
  noPadding?: boolean
}

export const Card: FC<CardProps> = ({
  children,
  useSmallMobilePadding,
  noPadding
}) => {
  const getCardClass = (): string => {
    if (noPadding) {
      return ' no-padding'
    }
    else if (useSmallMobilePadding) {
      return ' small-padding-wrapper'
    }

    return ''
  }

  return (
    <div className={`card-wrapper${getCardClass()}`}>
      {children}
      
      <style jsx>{`
        .card-wrapper {
          background: #FFFFFF;
          box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
          border-radius: 8px;
          padding: 24px;
        }
        
        .no-padding {
          padding: 0;
        }

        @media screen and (max-width: 750px) {
          .small-padding-wrapper {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  )
}
