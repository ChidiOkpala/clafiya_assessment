import { FC } from 'react'

interface MenuTextProps {
  isActive?: boolean
  text: string
}

export const MenuText: FC<MenuTextProps> = ({
  isActive,
  text
}) => (
  <div className={`menu-text${isActive ? ' active' : ''}`}>
    {text}
    
    <style jsx>{`
      .menu-text {
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.1px;
        color: #52575C;
      }

      .active {
        color: #0A459F;
      }
    `}</style>
  </div>
)
