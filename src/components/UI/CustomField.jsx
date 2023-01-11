import React from 'react'
import { Input } from 'reactstrap'
import { ErrorComponent } from './style'

const CustomField = ({className,type,label,labelStyle,onChange,value,placeholder,name,children,height,color,fontSize,width,border,formFieldBGColor,styleProps,error}) => {
  return (
    <>
     <div className="d-flex flex-column">
     {!!label && <label className={labelStyle}>{label}</label>}
     {
        type === 'select' ? (
            <Input
              style={{
                height:height || '50px',
                color: color,
                width: width,
                fontSize: fontSize,
              }}
              type="select"
              onChange={onChange}
              value={value || ''}
              placeholder={placeholder}
              name={name}
            >
              {children}
            </Input>
          ):(
            <Input
              onChange={onChange}
              type={type}
              value={value}
              style={{
                background: 'transparent' || formFieldBGColor,
                height: height || '2.688rem',
                width: width || '100%',
                border:'0.046rem solid #FFFFFF' || border,
                ...styleProps,
              }}
              className={className}
              placeholder={placeholder}
              name={name}
            />
          )
     }
             {!!error && <ErrorComponent>{error}</ErrorComponent>}
     </div>
    
    </>
  )
}

export default CustomField