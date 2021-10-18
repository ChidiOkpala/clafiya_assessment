import { FC, useState } from 'react'

import { MenuBar } from '../components/menuBar'
import { DashboardHeader } from '../components/dashboardHeader'

export const DashboardLayout: FC = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div>
      <div className="layout-wrapper">
        <aside>
          <MenuBar />
        </aside>
        {showMobileMenu && (
          <div className="mobile-menu-wrapper">
            <div className="mobile-menu-bar">
              <MenuBar />
            </div>
            <div
              className="close-icon"
              onClick={() => setShowMobileMenu(false)}
            >&#10005;</div>
          </div>
        )}
        <main>
          <DashboardHeader onMobileMenuClick={() => setShowMobileMenu(true)} />
          {children}
        </main>
      </div>

      <style jsx>{`
        .layout-wrapper {
          display: flex;
          width: 100%;
          min-height: 100vh;
        }

        .layout-wrapper > aside {
          width: 17.78%;
          min-width: 200px;
          height: 100vh;
          background-color: #ffffff;
          box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);
        }
        
        .layout-wrapper > .mobile-menu-wrapper {
          display: none;
        }

        .layout-wrapper > main {
          min-height: 100vh;
          width: 82.22%;
          background-color: #F6F8FB;
          padding: 24px 36px;
        }

        @media screen and (max-width: 750px) {
          .layout-wrapper .mobile-menu-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100vh;
            z-index: 20;
          }

          .layout-wrapper .mobile-menu-bar {
            width: 85%;
            box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);
            background-color: #ffffff;
          }

          .layout-wrapper aside {
            display: none;
          }

          .mobile-menu-wrapper .close-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            background-color: #0A459F;
            color: #ffffff;
            border-radius: 8px;
            margin: 24px;
          }

          .layout-wrapper > main {
            width: 100%;
            padding: 24px;
          }
        }
      `}</style>
    </div>
  )
}
