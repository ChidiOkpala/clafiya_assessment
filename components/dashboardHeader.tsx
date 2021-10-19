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
    <div className="desktop-header-wrapper">
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
      <div className="mobile-header">
        <MobileMenuIcon onClick={onMobileMenuClick} />
      </div>
    </div>

    <style jsx>{`
      .main-header-wrapper .desktop-header-wrapper .desktop-header {
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
        display: flex;
        position: relative;
        margin-right: 16px;
      }

      @media screen and (max-width: 750px) {
        .main-header-wrapper .mobile-header {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          padding: 14px 10px;
        }

        .main-header-wrapper .desktop-header-wrapper {
          display: flex;
          justify-content: space-between;
        }

        .main-header-wrapper .desktop-header-wrapper .desktop-header {
          flex-direction: column;
          padding: 14px 0;
        }

        .main-header-wrapper .desktop-header-wrapper .search-wrapper {
          order: 2;
        }

        .main-header-wrapper .desktop-header-wrapper .main-header-right {
          justify-content: flex-start;
          margin: 0 0 15px 10px;
          order: 1;
        }

        .main-header-wrapper .bell-icon-wrapper:first-child {
          order: 2;
          margin-left: 15px;
        }

        .main-header-wrapper .bell-icon-wrapper:last-child {
          order: 1;
        }
      }
    `}</style>
  </div>
)
