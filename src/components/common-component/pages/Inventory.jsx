import React from 'react'
import DashboardSidebar from '../sidebar/Sidebar'
import { DashboardWrapper, InventoryWrapper } from './pagestyle'
import DashboardPages from '../../Dashboard/DashboardPages'
import FlipOverview from '../flipOverview/FlipOverview'
import { inventoryData } from '../../data/inventoryData'
import { useState } from 'react'
import { shuffle } from '../../utils'

const Inventory = () => {

  const [show,setShow]= useState(false)
  const [data,setData]= useState(inventoryData)

  const onMouseOverDiv = () => {
    setShow(true)
    setData(shuffle(data))
  }

  return (
    <DashboardWrapper>
    <DashboardSidebar/>
     <DashboardPages>
  <InventoryWrapper>
    {data.map((item,index)=>(<div key={index} className='img_holder' onMouseOver={onMouseOverDiv} onMouseLeave={()=>setShow(false)}>
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