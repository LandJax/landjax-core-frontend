import React from 'react'
import { Col, Row } from 'reactstrap'
 import CustomField from '../../UI/CustomField'
import { FaCamera, FaVideo } from 'react-icons/fa'
import Custombutton from '../../UI/Custombutton'
import { color } from '../../data/colors'
import { AccountFormWrapper, DashboardWrapper, SnapshotWrapper } from './pagestyle'
import DashboardPages from '../../Dashboard/DashboardPages'
import DashboardSidebar from '../sidebar/Sidebar'

const Account = () => {
  return (
    <DashboardWrapper>
      <DashboardSidebar/>
       <DashboardPages>
        <div style={{height:'100vh'}}>
        <SnapshotWrapper>
          <div>
            <FaVideo/>
          </div>
          <div>
            <FaCamera/>
          </div>
        </SnapshotWrapper>
       <AccountFormWrapper>
<Row className='mb-3'>
<Col sm={6} xs={12} className='marginBottom'>
<CustomField label='First name' labelStyle='labelStyle'/>
</Col>
<Col sm={6} xs={12}>
<CustomField label='Last name' labelStyle='labelStyle'/>
</Col>
</Row>
<Row className='mb-3'>
<Col>
<CustomField label='Email' labelStyle='labelStyle'/>
</Col>
</Row>
<Row className='mb-3'>
<Col>
<CustomField label={<span>Username<span className='label_small'> (only letters,numbers, and undercore)</span></span>} labelStyle='labelStyle'/>
</Col>
</Row>
<Row className='mb-3'>
<Col sm={6} xs={12} className='marginBottom'>
<CustomField label='Wallet address' labelStyle='labelStyle'/>
</Col>
<Col sm={6} xs={12}>
<CustomField label='Instagram username' labelStyle='labelStyle'/>
</Col>
</Row>
<Row className='mb-3'>
<Col sm={6} xs={12} className='marginBottom'>
<CustomField label='Bio' labelStyle='labelStyle' type={'textarea'} className={'bio_area'} height='9.688rem'/>
</Col>
<Col sm={6} xs={12}>
<CustomField label='Twitter username' labelStyle='labelStyle'/>
</Col>
</Row>

       </AccountFormWrapper>
       <div className='savebtn'>  
  <Custombutton text='Save Changes' color={color.placeholder} fontSize='18px' bg={color.landJaxSecondaryColor}/>
      </div>
        </div>
       </DashboardPages>
    </DashboardWrapper>
   
  )
}

export default Account