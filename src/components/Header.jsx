import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../Assets/logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Header = () => {
  let handleshow = ()=>{
    setShow(!show)

  }

 let [show,setShow] = useState(false)

  return (

    <header className='py-[42px] bg-[#FFFFFF]'>
    <Container>
        <Flex className='justify-around items-center'     >
   <div className=""> 
   <img src={logo} alt="logo" />
   </div>
   <div className=" ">
      <ul className={` sm:flex justify-evenly gap-x-7 absolute left-0 top-0 lg:static ${ show == true ? "bg-[#F5F5F3] py-8 w-full top-[100px] text-center duration-150 ease-in z-50" : " top-[100px] left-[-340px]"}`}>
     <li className=' font-dm font-bold text-[14px] leading-[18.23px] text-bl py-2 cursor-pointer '> <Link to="/oreby" >  Home </Link>   </li> 
   <li className=' font-dm font-[400] text-[14px] leading-[18.23px] text-gr  py-2  cursor-pointer  '> <Link to="/shop" >  Shop </Link>    </li>  
     <li className=' font-dm font-[400] text-[14px] leading-[18.23px] text-gr  py-2   cursor-pointer   '> <Link to="/about">  About  </Link>     </li> 
      <li className=' font-dm font-[400] text-[14px] leading-[18.23px] text-gr  py-2  cursor-pointer  '> <Link to="/contacts" > Contacts   </Link>    </li>
      <li className=' font-dm font-[400] text-[14px] leading-[18.23px] text-gr  py-2  cursor-pointer ' > Journal</li>
    </ul>
   </div>
    <div className=" lg:hidden" onClick={handleshow}          >
      {show ? <ImCross />  : <FaBars /> }
    </div>
        </Flex>
    </Container>
    </header>
  )
}

export default Header