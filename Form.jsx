import React from 'react'

const Form = () => {
  return (
    <div>
      <h2  className="text-center">Please fill out the form</h2>
      <br/>
      <label>Name :</label>
      <input type='text'className="input-group-text" id="inputGroup-sizing-sm"/>
      
    
      <label>Roll :</label>
      <input type='text' className="input-group-text" id="inputGroup-sizing-sm"/>
      
      
      <label>Address :</label>
      <input type='text' className="input-group-text" id="inputGroup-sizing-sm"/>
      
      
      <label>Password :</label>
      <input type='text'className="input-group-text" id="inputGroup-sizing-sm"/>
      
      <label>AboutUs :</label>
      <input type='text'className="input-group-text" id="inputGroup-sizing-sm"/>
      <br/>
      
      <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto">Submit</button>
    </div>
  )
}

export default Form
