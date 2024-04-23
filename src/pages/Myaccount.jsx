import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'


const Myaccount = () => {
  return (
    <div>
      <Container>
      <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>My Account</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/myaccount">My account</Link> </span>
     <div className=" flex justify-between items-center gap-x-3 pt-[70px] lg:pt-[127px]">
      <div className="w-[25%] ">
        <ul className=''>
        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Dashboard</Link></li> <hr />
        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Others</Link></li> <hr />
        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Downloads</Link></li> <hr />
        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Addresses</Link></li> <hr />
        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Account details</Link></li> <hr />
        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Logout</Link></li> <hr />
        </ul>
      </div>
      <div className="w-[75%]">
      <h2 className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] pt-4'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span>? <span className='text-[#262626]'>Log out</span> )</h2>
      <p className='ont-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-5 lg:leading-8 pt-10 lg:pr-[280px]'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'>shipping and billing addresses</span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
      </div>
     </div>
      </Container>
    </div>
  )
}

export default Myaccount