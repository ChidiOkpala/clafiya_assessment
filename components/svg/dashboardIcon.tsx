import { FC } from 'react'

import { MenuIconProps } from './model'

export const DashboardIcon: FC<MenuIconProps> = ({ isActive }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M6.2192 1.20646C2.7856 1.20646 0 3.99046 0 7.42566C0 10.8609 2.784 13.6465 6.2192 13.6465C9.6544 13.6465 12.4384 10.8625 12.4384 7.42566H6.2192V1.20646ZM14 6.71366C14 4.99686 13.304 3.44166 12.1792 2.31686L7.7808 6.71366H14ZM7.0064 0.350464V6.56806L11.4032 2.17126C10.1888 0.956864 8.5968 0.350464 7.0064 0.350464Z"
    fill={isActive ? "#0A459F" : '#DBDDE0'}
  />
  </svg>
)
