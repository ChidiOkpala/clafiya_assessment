import { FC } from 'react'
import Link from 'next/link'

import { MenuIconProps } from '../atoms/svg/model'
import { MenuText } from '../atoms/menuText'

export interface MenuItemProps {
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
      <div className="menu-text">
        <MenuText text={text} isActive={isActive} />
      </div>

      <style jsx>{`
        .menu-item-wrapper {
          display: flex;
          align-items: center;
          padding-left: 25px;
          height: 48px;
          cursor: pointer;
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
