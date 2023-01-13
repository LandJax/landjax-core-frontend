import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { ActivityListWrapper } from './style'

const ActitvityList = ({time,date,msg,houseType,track,status}) => {
  return (
    <ActivityListWrapper>
        <div className='activity_date'>
            <h4>{time}</h4>
            <h4>{date}</h4>
        </div>
        <div>
            <h4>{msg}</h4>
        </div>
        <div>
            <h4>{houseType}</h4>
        </div>
        <div>
            <h4>{track}</h4>
        </div>
        <div>
            <h4>View Status</h4>
        </div>
        <div>
            <FaRegEdit/>
        </div>
    </ActivityListWrapper>
  )
}

export default ActitvityList