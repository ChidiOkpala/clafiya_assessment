import { FC } from 'react'

interface BadgeProps {
  number: number
}

export const Badge: FC<BadgeProps> = ({
  number
}) => (
  <div className="badge">
    {number}

    <style jsx>{`
      .badge {
        position: absolute;
        right: -10px;
        top: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        background-color: #FF6760;
        color: #ffffff;
        border-radius: 50%;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.2px;
        border: 1.5px solid #ffffff;
      }
    `}</style>
  </div>
)
