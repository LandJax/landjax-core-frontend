import React from 'react'

const FlipOverview = ({title,details}) => {
   

  return (
    <>
    <div className='overlay'>
      <h1 className='detail'>Details</h1>
        <h1 className='title'>{title}</h1>
        <h2 className='detail'>Features</h2>
        <h4 className='title'>{details}</h4>
    </div>
    </>
   
  )
}

export default FlipOverview