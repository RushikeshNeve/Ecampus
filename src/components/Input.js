import React from 'react'
import Signup from './Signup'
function Input(props) {
  return (
    <>
    <label className="form-label">{props.label}</label>
    <input type={props.type} className="form-control" id="inputname" name={props.name} onChange = {(e) => props.onChange(e)} />
    </>
  )
}

export default Input