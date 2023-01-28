import React from 'react'
import { CustomBtn } from './style'

const Custombutton = ({text,onClick,icon,iconProps,className,width,buttonColor,...rest}) => {

    const IconComponent = icon
  return (
    <>
    <CustomBtn style={{background:buttonColor}} className={className} onClick={onClick} {...rest}>
    {!!icon && <IconComponent {...iconProps} />}
    {!!text && text}
    </CustomBtn >
    </>
  )
}

export default Custombutton