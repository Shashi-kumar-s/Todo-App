import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FontAwesome = (props) => {
    const{iconName,onClick,className}=props
  return (
    <FontAwesomeIcon icon={iconName} onClick={onClick} className={className}
  />
  )
}

export default FontAwesome