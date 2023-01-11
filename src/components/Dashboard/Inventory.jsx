import React from 'react'
import { DashboardWrapper } from './style'
import DashboardSidebar from '../common-component/sidebar/Sidebar'
import DashboardPages from '../common-component/pages/DashboardPages'

const Inventory = () => {
  return (
    <DashboardWrapper>
    <DashboardSidebar/>
     <DashboardPages>
     Inventory
     </DashboardPages>
  </DashboardWrapper>
  )
}

export default Inventory