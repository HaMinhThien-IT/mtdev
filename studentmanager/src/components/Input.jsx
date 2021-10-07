import React from 'react'
import PropTypes from 'prop-types';
const Input = ({ type = '', onChange, value, ...props }) => {
    const handelChange = (event) => {
        const val = event.target.value;
        if (type === 'number') {
            if (/^\d+$/.test(val) || val === '') {
                onChange(val)
            }
        } else {
            onChange(val)
        }
    }
    return <input type={type === 'number' ? 'text' : type}
        value={value}
        onChange={handelChange}
        {...props}
    />


}
Input.propsTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string

}
export default Input

