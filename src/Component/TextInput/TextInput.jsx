import { TextField } from '@mui/material'
import React from 'react'

const TextInput = (props) => {
    const{onChange,type,value,autoFocus,variant,placeholder,autoComplete,className}=props
  return (
    <TextField onChange={onChange} type={type} value={value} autoFocus={autoFocus} variant={variant} placeholder={placeholder} autoComplete={autoComplete} className={className}/>
  )
}

export default TextInput