import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MenuItem } from './menuItem'
import {
  AppointmentIcon,
  DashboardIcon,
  DepartmentIcon,
  HealthWorkerIcon,
  HelpIcon,
  PatientIcon,
  PaymentIcon,
} from './svg'

export const MenuBar: FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>(menuList[0].text)

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
      {menuList.map(({icon, text}) => (
        <MenuItem
          Icon={icon}
          text={text}
          key={text}
          isActive={activeMenu === text}
          onClick={() => setActiveMenu(text)}
        />
      ))}
      <hr />
      <MenuItem Icon={HelpIcon} text="help" />

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

const menuList = [
  {
    icon: DashboardIcon,
    text: 'Dashboard'
  },
  {
    icon: AppointmentIcon,
    text: 'Appointments'
  },
  {
    icon: HealthWorkerIcon,
    text: 'Health Workers'
  },
  {
    icon: DepartmentIcon,
    text: 'Departments'
  },
  {
    icon: PatientIcon,
    text: 'Patients'
  },
  {
    icon: PaymentIcon,
    text: 'Payments'
  },
] 
