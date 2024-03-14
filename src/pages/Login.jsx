import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Login = () => {
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
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='company@domain.com'></input> 
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Password</h3>
        <input type="password"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='password'></input> 
      


        </div>
      </div>
      <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[77px] bg-[#FFFFFF] font-dm text-[16px] text-bl border-[1px] border-[#2B2B2B] inline-block font-bold cursor-pointer">Login</h3>
      </div>
        </div>
        <div className="pt-[96px]">
        <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>New Customer</h2>
        <p className='text-grr text-[16px] leading-[30px] font-dm font-normal lg:w-[644px] w-auto pt-[38px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[66px] bg-bl font-dm text-[16px] text-[#FFFFFF] border-[1px] border-[#2B2B2B] inline-block cursor-pointer font-bold">   <Link to="/signup" > Continue </Link></h3>
      </div>
        </div>

 
      </Container>





    </div>
  )
}

export default Login