
import styled from 'styled-components'
import { color } from '../data/colors'

export const ErrorComponent = styled.span`
  color: ${color.red};
  font-size: 12px;
  font-weight: 500;
`

export const CustomBtn = styled.button`
  background: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width};
  border: none;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: ${(props) => props.upperCase && 'Uppercase'};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height};
  opacity: ${(props) => props.disabled && '0.5'};
  ouline: none;
  font-weight: bold;
  border-radius: 5px;
  cursor:pointer;
`