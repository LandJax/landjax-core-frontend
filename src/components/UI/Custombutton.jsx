import React from 'react'
import { CustomBtn } from './style'

const Custombutton = ({text,onClick,icon,iconProps,...rest}) => {

    const IconComponent = icon
  return (
    <>
    <CustomBtn onClick={onClick} {...rest}>
    {!!icon && <IconComponent {...iconProps} />}
    {!!text && text}
    </CustomBtn>
    </>
  )
}

export default Custombutton