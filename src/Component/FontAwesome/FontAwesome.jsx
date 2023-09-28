import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propTypes from "prop-types"

const FontAwesome = (props) => {
    const{iconName,onClick,className}=props
  return (
    <FontAwesomeIcon icon={iconName} onClick={onClick} className={className}
  />
  )
}

FontAwesome.propTypes={
  onclick:propTypes.func,
  className:propTypes.string
}

export default FontAwesome