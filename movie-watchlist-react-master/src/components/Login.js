import React, { useRef } from 'react'
import { useState } from 'react'
import {checkValidData} from '../utils/checkValidaData'

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const email=useRef();
    const name=useRef();
    const password=useRef();
    const [errorMessage,setErrorMessage]=useState(null);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);

    }

    const handleButtonClick=()=>{
     
      //Validate the form Data
      const message=checkValidData(email.current.value,password.current.value)
      setErrorMessage(message)

      //sign /sign up
    }


  return (
    <div className='bgimg absolute '>

<div className=''>
<form onSubmit={(e)=>e.preventDefault()}  className='w-50 relative p-12 mx-auto right-0 left-0 bg-dark opacity-60'>
    <h1 className='font-bold p-2 mx-5 '>{isSignInForm ? "Sign In":"Sign Up"}</h1>
    {
      !isSignInForm && (
        <div className="mb-3 mx-5">
    <label  className="form-label">Full Name</label>
    <input type="text"  placeholder='Enter Full Name' className="form-control"  aria-describedby="name"/>
  </div>
      )
    }
    
  <div className="mb-3 mx-5">
    <label className="form-label">Email address</label>
    <input type="email"  ref={email} placeholder='Email Address' className="form-control" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 mx-5">
    <label  className="form-label">Password</label>
    <input type="password" ref={password} placeholder='Password' className="form-control" />
  </div>
 
 <p className='text-danger'>{errorMessage}</p>
  <button onClick={handleButtonClick} className="btn btn-primary mx-5">{isSignInForm ? "sign in ":"sign up"}</button>
  
  <p className='px-5 py-3 point' onClick={toggleSignInForm}>{isSignInForm ? "New To MovieMasti ? Sign Up Now":
  "Already registered Sign In Now"
}</p>
</form>
</div>
        
    </div>
  )
}

export default Login