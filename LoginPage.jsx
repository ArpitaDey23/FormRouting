import React, { useState } from 'react'
import { useEffect } from 'react'
import Form from './Form';

const LoginPage = () => {
  const [value, setValue] = useState('');
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [newForm , setNewForm] = useState(false);

  const handleLogin =()=>{
  //  setValue('Welcome');
   if(userName.length>0 && pass.length>0){
   setIsLogin(true)
   }
  }
  const handleName =(e)=>{
   setUserName(e.target.value) ;
    // console.log(userName);
  }
const handlePass =(e)=>{
    setPass(e.target.value);
    // console.log(pass);
}
  useEffect(()=>{
   if (isLogin){
    setValue('welcome')
    setTimeout(()=>{
      setValue('')
      setNewForm(true)
    },3000)
   }

  },[isLogin])
  
  return (
    <div className="position-absolute top-50 start-50 translate-middle p-3 mb-2 bg-info-subtle text-emphasis-info">
      {!isLogin?<form>
        <h2  className="text-center">Form</h2>
        <br/>
      <label>Username:</label>
      <input type='text' className="form-control" aria-label="Username" aria-describedby="basic-addon1"onChange={handleName}/>
      <label>Password:</label>
      <input type='password'className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={handlePass}/>
      <br/>
      <br/>
      <button type="button" className="btn btn-primary d-grid gap-2 col-6 mx-auto"onClick={handleLogin}>Login</button>
      <br/>
      <br/>
      </form>:null}
      {newForm?<Form/>:null}
      <h1>{value}</h1>
    </div>
  )
}

export default LoginPage
