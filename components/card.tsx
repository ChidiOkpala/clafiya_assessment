import { FC } from 'react'

export const Card: FC = ({ children }) => (
  <div className="card-wrapper">
    {children}
    
    <style jsx>{`
      .card-wrapper {
        background: #FFFFFF;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        border-radius: 8px;
        padding: 24px;
      }
    `}</style>
  </div>
)
