import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'

import { MenuItem } from '../molecules/menuItem'
import { helpMenuItem, menuList } from '../../helpers/constant'

export const MenuBar: FC = () => {
  const router: NextRouter = useRouter()
  const routePath: string = router.asPath.toLowerCase()
    .replace('/', '')
    .replace('%20', ' ')
  
  const getActiveMenu = (text: string): boolean =>
    routePath === text.toLowerCase()

  return (
    <div className="menu-bar-wrapper">
      <Link href="/">
        <div className="image-wrapper">
          <Image
            src="/assets/logo.png"
            width="150px"
            height="40px"
            layout="fixed"
          />
        </div>
      </Link>
      {menuList.map(item => (
        <MenuItem
          {...item}
          key={item.text}
          isActive={getActiveMenu(item.text)}
        />
      ))}
      <hr />
      <MenuItem {...helpMenuItem} />

      <style jsx>{`
        .menu-bar-wrapper {
          width: 100%;
          overflow: hidden;
          z-index: 10;
        }

        .menu-bar-wrapper .image-wrapper {
          margin: 24px 24px 80px;
          cursor: pointer;
        }

        .menu-bar-wrapper hr {
          border: 1px solid #E8E8E8;
        }

        @media screen and (max-width: 750px) {
          .menu-bar-wrapper .image-wrapper {
            margin-left: 24px;
          }
        }
      `}</style>
    </div>
  )
} 
