import React from 'react'
import { DashboardWrapper } from './style'
import DashboardSidebar from '../common-component/sidebar/Sidebar'
import DashboardPages from '../common-component/pages/DashboardPages'

const Overview = () => {
  return (
    <DashboardWrapper>
    <DashboardSidebar/>
     <DashboardPages>
     Overview
     </DashboardPages>
  </DashboardWrapper>
  )
}

export default Overview