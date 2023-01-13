import React from 'react'
import DashboardSidebar from '../sidebar/Sidebar'
import invent from '../../../assest/images/dashboard/invent.png'
import { DashboardWrapper, InventoryWrapper } from './pagestyle'
import DashboardPages from '../../Dashboard/DashboardPages'

const Inventory = () => {
  return (
    <DashboardWrapper>
    <DashboardSidebar/>
     <DashboardPages>
  <InventoryWrapper>
    {
      [...Array(12)].map((item,index)=>(<div key={index} className='img_holder'>
        <img src={invent} alt="" />
      </div>))
    }
  </InventoryWrapper>
     </DashboardPages>
  </DashboardWrapper>
  )
}

export default Inventory