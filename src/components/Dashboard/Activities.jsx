import React from 'react'
import { DashboardWrapper } from './style'
import DashboardSidebar from '../common-component/sidebar/Sidebar'
import DashboardPages from '../common-component/pages/DashboardPages'

const Activities = () => {
  return (
    <DashboardWrapper>
      <DashboardSidebar/>
       <DashboardPages>
       Activities
       </DashboardPages>
    </DashboardWrapper>
  )
}

export default Activities