import React from 'react'

function Select(props) {
  return (
    <>
              <label  className="form-label">{props.label}</label>
              <select  className="form-select" name={props.name}  onChange = {(e) => props.onChange(e)}>
                  <option selected>Choose...</option>
                  {/* <option>Computer</option> 
                  <option>Entc</option>
                  <option>Electrical</option>
                  <option>Instrumentation</option> */}
                  {
                    props.data.map((i) =>{
                        return <option>{i}</option>
                    })
                  }
              </select>
    
    
    </>
 
 )
}

export default Select