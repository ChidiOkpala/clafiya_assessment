import { FC } from 'react'
import Link from 'next/link'

import { MenuIconProps } from './svg/model'

interface MenuItemProps {
  text: string
  Icon: FC<MenuIconProps>
  isActive?: boolean
  onClick?: () => void
}

export const MenuItem: FC<MenuItemProps> = ({
  Icon,
  text,
  onClick,
  isActive,
}) => (
  <Link href={`/${text.toLowerCase()}`}>
    <a
      className={`menu-item-wrapper${
        isActive ? ' active-menu' : ''
      }`}
      onClick={() => onClick && onClick()}
    >
      {<Icon isActive={isActive} />}
      <div className="menu-text">{text}</div>

      <style jsx>{`
        .menu-item-wrapper {
          display: flex;
          align-items: center;
          padding-left: 25px;
          height: 48px;
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.1px;
          color: #52575C;
          cursor: pointer;
        }

        .active-menu,
        .menu-item-wrapper:hover {
          color: #0A459F;
        }

        .menu-item-wrapper .menu-text {
          margin-left: 13px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </a>
  </Link>
)
