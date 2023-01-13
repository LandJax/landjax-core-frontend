import React from 'react'
import DashboardSidebar from '../sidebar/Sidebar'
import DashboardPages from '../../Dashboard/DashboardPages'
import { DashboardWrapper } from './pagestyle'

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