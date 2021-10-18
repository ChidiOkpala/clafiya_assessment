import { FC } from 'react'
import Image from 'next/image'

import { Badge } from './badge'
import { SearchInput } from './searchInput'
import { BellIcon } from './svg'
import { MobileMenuIcon } from './mobileMenuIcon'

interface DashboardHeaderProps {
  onMobileMenuClick: () => void
}

export const DashboardHeader: FC<DashboardHeaderProps> = ({
  onMobileMenuClick
}) => (
  <div className="main-header-wrapper">
    <div className="mobile-header">
      <Image src="/assets/logo.png" width="150" height="40" layout="fixed" />
      <MobileMenuIcon onClick={onMobileMenuClick} />
    </div>
    <div className="desktop-header">
      <div className="search-wrapper">
        <SearchInput onSubmit={(value) => console.log(value)} />
      </div>
      <div className="main-header-right">
        <div className="bell-icon-wrapper">
          <Badge number={9} />
          <BellIcon />
        </div>
        <Image src="/assets/user-profile.png" width="40px" height="40px" layout="fixed" />
      </div>
    </div>

    <style jsx>{`
      .main-header-wrapper .desktop-header {
        display: flex;
        justify-content: space-between;
      }

      .main-header-wrapper .mobile-header {
        display: none;
      }

      .main-header-wrapper .main-header-right {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .main-header-wrapper .bell-icon-wrapper {
        position: relative;
        margin-right: 16px;
      }

      @media screen and (max-width: 750px) {
        .main-header-wrapper .mobile-header {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 24px 10px;
        }

        .main-header-wrapper .desktop-header {
          flex-direction: column;
          margin-top: 65px;
        }

        .main-header-wrapper .desktop-header .search-wrapper {
          order: 2;
        }

        .main-header-wrapper .desktop-header .main-header-right {
          justify-content: flex-start;
          margin-bottom: 15px;
          order: 1;
        }
      }
    `}</style>
  </div>
)
