import React from 'react'
import { Button } from '@mui/material'
import { ClassNames } from '@emotion/react'

const ButtonCategory = (props) => {
    const {value,onClick,variant,classname}=props
  return (
    <Button variant={variant} onClick={onClick}>{value}</Button>
  )
}

export default ButtonCategory