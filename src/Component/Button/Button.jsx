import React from "react"
import { Button } from "@mui/material"
import propTypes from "prop-types"

const ButtonCategory = (props) => {
  const { value, onClick, variant } = props
  return (
    <Button variant={variant} onClick={onClick}>
      {value}
    </Button>
  )
}

ButtonCategory.propTypes = {
  value: propTypes.string,
  onclick: propTypes.func,
  variant: propTypes.string,
}

export default ButtonCategory
