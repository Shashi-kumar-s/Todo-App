import { TextField } from "@mui/material"
import propTypes from "prop-types"

const TextInput = (props) => {
  const {
    onChange,
    type,
    value,
    autoFocus,
    variant,
    placeholder,
    autoComplete,
    className,
  } = props
  return (
    <TextField
      onChange={onChange}
      type={type}
      value={value}
      autoFocus={autoFocus}
      variant={variant}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={className}
    />
  )
}

TextInput.propTypes = {
  type: propTypes.string,
  onchange: propTypes.func,
  value: propTypes.string,
  autoFocus: propTypes.bool,
  variant: propTypes.string,
  placeholder: propTypes.string,
  autoComplete: propTypes.string,
  className: propTypes.string,
}

export default TextInput
