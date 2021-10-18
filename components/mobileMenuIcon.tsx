import { FC } from 'react'

interface MobileMenuIconProps {
  onClick: () => void
}

export const MobileMenuIcon: FC<MobileMenuIconProps> = ({
  onClick
}) => (
  <div onClick={onClick} className="mobile-icon-wrapper">
    <div></div>
    <div></div>
    <div></div>

    <style jsx>{`
      .mobile-icon-wrapper {
        width: 24px;
        height: 24px;
      }

      .mobile-icon-wrapper div {
        width: 24px;
        height: 3px;
        background-color: #0A459F;
        margin: 6px 0;
      }
    `}</style>
  </div>
)
