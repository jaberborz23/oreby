import React, { useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword , sendPasswordResetEmail  } from "firebase/auth";


const Login = () => {
  const auth = getAuth();

  let [email , setEmail] = useState('')
  let [password , setPassword] = useState('')
  let [error , setError] = useState('')
  let [forgetModal , setforgetMlodal] = useState(false)
  let [updatepasswordEmail , setupdatepasswordEmail] = useState('')
  let handleEmail = (e)=>{
    setEmail(e.target.value);

  }
  let handlePassword = (e)=>{
    setPassword(e.target.value);


  }
  let handleLogin = (e)=>{
 
    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    console.log(user);
    setError('')
  })
  .catch((error) => {
    const errorCode = error.code;
   setError(errorCode);
  });

  }
  let handleforgetPassword = ()=>{
    setforgetMlodal(true)
  //   sendPasswordResetEmail(auth, email)
  // .then(() => {
  //   // Password reset email sent!
  //   // ..
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
  }
  let handleUpdatePassword = ()=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }

  
  return (
    <div className=''>
      <Container>
      <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>Login</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/login">Login</Link> </span>

      <div className=" py-[57px]">
        <p className='text-grr text-[16px] leading-[30px] font-dm font-normal lg:w-[644px] w-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      </div>

      <div className=" pt-[57px]">
      <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Returning Customer</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Email address</h3>
         <input type="email"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='company@domain.com' onChange={handleEmail}></input> 
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Password</h3>
        <input type="password"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='password' onChange={ handlePassword}></input> 
      


        </div>
      </div>
      { error && 
       <p className='text-red-500 mt-5 text-md font-medium'>{error}</p>
      }
      <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[77px] bg-[#FFFFFF] font-dm text-[16px] text-bl border-[1px] border-[#2B2B2B] inline-block font-bold cursor-pointer"><Link  onClick={handleLogin} > Login</Link></h3>
      </div>
      <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[77px] bg-[#FFFFFF] font-dm text-[16px] text-bl border-[1px] border-[#2B2B2B] inline-block font-bold cursor-pointer"><Link onClick={handleforgetPassword}  > Forget Password</Link></h3>
      </div>
        </div>
        <div className="pt-[96px]">
        <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>New Customer</h2>
        <p className='text-grr text-[16px] leading-[30px] font-dm font-normal lg:w-[644px] w-auto pt-[38px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[66px] bg-bl font-dm text-[16px] text-[#FFFFFF] border-[1px] border-[#2B2B2B] inline-block cursor-pointer font-bold">   <Link to="/signup" > Continue </Link></h3>
      </div>
        </div>
        { forgetModal &&
        
        <div className='absolute top-[430px] left-2/4 translate-x-[-50%] w-[500px] h-[300px] bg-gray-500 pt-[10px]'>
       <input type="text" onChange={(e)=>setupdatepasswordEmail(e.target.value)} className='w-[80%] h-[50px] p-5'placeholder='Enter your Email' />
       <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[66px] bg-bl font-dm text-[16px] text-[#FFFFFF] border-[1px] border-[#2B2B2B] inline-block cursor-pointer font-bold" onClick={handleUpdatePassword}>   <Link  > Update Password</Link></h3>
      </div>

        </div>
        
        }

 
      </Container>





    </div>
  )
}

export default Login