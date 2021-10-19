import { FC } from 'react'
import Image from 'next/image'

import { Badge } from '../atoms/badge'
import { SearchInput } from '../molecules/searchInput'
import { BellIcon } from '../atoms/svg'
import { MobileMenuIcon } from '../atoms/mobileMenuIcon'

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
          <Image
            src="/assets/user-profile.png"
            width="40px"
            height="40px"
            layout="fixed"
          />
        </div>
      </div>
      <div className="mobile-header">
        <MobileMenuIcon onClick={onMobileMenuClick} />
      </div>
    </div>

    <style jsx>{`
      .desktop-header {
        display: flex;
        justify-content: space-between;
      }

      .mobile-header {
        display: none;
      }

      .main-header-right {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .bell-icon-wrapper {
        display: flex;
        position: relative;
        margin-right: 16px;
      }

      @media screen and (max-width: 750px) {
        .mobile-header {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          padding: 14px 10px;
        }

        .desktop-header-wrapper {
          display: flex;
          justify-content: space-between;
        }

        .desktop-header {
          padding: 10px 0;
        }

        .search-wrapper {
          order: 2;
        }

        .main-header-right {
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

      @media screen and (max-width: 310px) {
        .desktop-header {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)
