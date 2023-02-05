import React from 'react'
import PropTypes from "prop-types"


export default function Button({label, onClick}) {
  return (
<button onClick={onClick}>{label}</button>  )
}

Button.propTypes = {
onClick: PropTypes.func,
label: PropTypes.string
}
