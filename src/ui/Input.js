import React from 'react'
import PropTypes from "prop-types"

export default function Input({label, id, type="text", placeholder, value, onChange}) {
  return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            /> 
        </>
    )        
}

Input.propTypes = {
id: PropTypes.elementType,
type: PropTypes.string,
placeholder: PropTypes.string,
value: PropTypes.string,
onChange: PropTypes.func,
}