import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif"
import {BiShow , BiHide} from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { ImagetoBase64 } from '../utility/imagetoBase64';

function Signup() {
    const navigate = useNavigate()
    const [showPassword , setshowPassword] = useState(false);
    const [showConfirmPassword , setshowConfirmPasswor] = useState(false);
    const [data, setdata] = useState({
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : "",
      image : "",
    });
    console.log(data)
    const handleshowPassword = () =>{
      setshowPassword(preve => !preve)
    }
    const handleShowConfirmPassword = () =>{
      setshowConfirmPasswor(preve => !preve)
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

    const handleUploadProfileImage = async(e)=> {
      const data = await ImagetoBase64(e.target.files[0])
      console.log(data)

      setdata((preve)=>{
        return{
          ...preve,
          image : data
        }
      })
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      const {firstName,email,password,confirmPassword} = data
      if(firstName && email && password && confirmPassword){
        if(password === confirmPassword){
          alert("successfull")
          navigate("/login")
        }
        else{
          alert("password and confirm passwrod does not match")
        }
      }
      else{
        alert("Please Enter required fields")
      }
    }

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
          { /* <h1 className='text-center text-2xl font-bold '>Sign up</h1> */}
          <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
            <img src={data.image? data.image :loginSignupImage} className='w-full h-full' alt=''/>

            <label htmlFor='profileImage'>
              <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
                <p className='text-sm p-1 text-white'>Upload</p>
              </div>
              <input type={"file"} id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage} />
            </label>
          </div>

          <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input 
              type={"text"} 
              id='firstName' 
              name='firstName'
              className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
              value={data.firstName}
              onChange={handleOnChange} />

            <label htmlFor='lastName'>Last Name</label>
            <input 
              type={"text"} 
              id='lastName' 
              name='lastName'
              className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
              value={data.lastName}
              onChange={handleOnChange} />

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

            <label htmlFor='confirmpassword'>Confirm Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
              <input 
                type={ showConfirmPassword? "text" : "password"} 
                id='confirmpassword' 
                name='confirmPassword'
                className=' w-full bg-slate-200 border-none outline-none'
                value={data.confirmPassword}
                onChange={handleOnChange} />
              <span className='flex text-xl'onClick={handleShowConfirmPassword}>
                {showConfirmPassword ?<BiShow/> : <BiHide/>}
              </span>
            </div>

            <button className='w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>
              Sign Up
            </button>
          </form>
          <p className='text-left text-sm mt-2'>
            Already have account ? {" "}
            <Link to={"/login"} className='text-red-500 underline'>Login</Link>
          </p>
        </div>
    </div>
  )
}

export default Signup               