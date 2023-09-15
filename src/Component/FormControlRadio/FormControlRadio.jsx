import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const FormControlRadio = (props) => {
    const {value,control,label}=props
  return (
    <FormControlLabel
    value={value}
    control={control}
    label={label}
  />
  )
}

export default FormControlRadio