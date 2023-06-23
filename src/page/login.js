import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif"
import {BiShow , BiHide} from "react-icons/bi"
import { Link } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';

const Login = () => {

  const [showPassword , setshowPassword] = useState(false);
  const [data, setdata] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
  });
  console.log(data)
  const handleshowPassword = () =>{
    setshowPassword(preve => !preve)
  }
  const handleOnChange = (e) =>{
    const {name,value} = e.target
    setdata((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const {email,password} = data
    if(email && password){
      alert("successfull")
    }
    else{
      alert("Please Enter required fields")
    }
  }

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
        { /* <h1 className='text-center text-2xl font-bold '>Sign up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
          <img src={loginSignupImage} className='w-full' alt=''/>
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input 
            type={"email"} 
            id="email" 
            name='email'
            className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
            value={data.email}
            onChange={handleOnChange} />

          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
            <input 
              type={ showPassword? "text" : "password"} 
              id='password' 
              name='password'
              className=' w-full bg-slate-200 border-none outline-none'
              value={data.password}
              onChange={handleOnChange}/>
            <span className='flex text-xl'onClick={handleshowPassword}>
              {showPassword ?<BiShow/> : <BiHide/>}
            </span>
          </div>

          <button className='w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>
            Login
          </button>
        </form>
        <p className='text-left text-sm mt-2'>
          Do not have account ? {" "}
          <Link to={"/signup"} className='text-red-500 underline'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login