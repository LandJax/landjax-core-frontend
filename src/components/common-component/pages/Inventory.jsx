import React from 'react'
import DashboardSidebar from '../sidebar/Sidebar'
import { DashboardWrapper, InventoryWrapper } from './pagestyle'
import DashboardPages from '../../Dashboard/DashboardPages'
import FlipOverview from '../flipOverview/FlipOverview'
import { inventoryData } from '../../data/inventoryData'
import { useState } from 'react'

const Inventory = () => {

  const [data,setData]= useState(inventoryData)

  return (
    <DashboardWrapper>
    <DashboardSidebar/>
     <DashboardPages>
  <InventoryWrapper>
    {data.map((item,index)=>(<div key={index} className='img_holder'>
    <img src={item.img} alt=""  />
        <FlipOverview title={item?.title} details={item?.feature}/>
      </div>))
    }
  </InventoryWrapper>
     </DashboardPages>
  </DashboardWrapper>
  )
}

export default Inventory