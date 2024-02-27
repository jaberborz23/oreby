import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import cart from "../Assets/cart.png"
import { ImCross } from "react-icons/im";
import { FaPlus , FaMinus,FaCaretDown } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className='py-[65px]' >
        <Container>
        <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>Cart</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/contacts">Cart</Link> </span>
      <div className='py-4'>
        <div className="bg-[#F5F5F3] py-5">
        <ul className='flex justify-around items-center flex-wrap '>
            <li className='font-dm font-bold text-[16px] leading-[23px] text-bl'>Product</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Price</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Quantity</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Total</li>
        </ul>
        </div>
        <div className="  bg-[#FFFFFF] flex items-center justify-around flex-wrap ">
            <div className="lg:w-[25%] sm:w-[23%] w-full flex justify-evenly items-center py-8  ">
            <i><ImCross /></i>
            <img src={cart} alt="cart" />
            <h6  className='font-dm font-bold text-[16px] leading-[23px] text-bl'>Product name</h6>
            </div>
            <div className="lg:w-[23%] sm:w-[19%] w-full lg:pl-[78px] xxs:pl-0">
                <h5  className='font-dm font-bold text-[20px] leading-[26.04px] text-bl'>$44.00 </h5>
            </div>
            <div className="lg:w-[20%] sm:w-[23%] w-full lg:pr-[32px] xxs:pr-0 ">
            <div className="w-[142px] h-[36px] flex items-center justify-between gap-x-4 border-[1px]  ">
                <i className='text-gr'><FaPlus /></i>
                <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>1</h3>
                <i className='text-gr'><FaMinus /></i>
            </div>
              </div>
            <div className="lg:w-[20%] sm:w-[18%] w-full lg:pl-[89px] xxs:pl-7">
                <h5 className='font-dm font-bold text-[20px] leading-[26.04px] text-bl'>$44.00 </h5>
            </div>

        </div>
        <div className=" flex items-center justify-between bg-[#FFFFFF] border-[1px] py-2 border-[#F0F0F0]">
            <div className=" w-[30%] flex justify-around items-center gap-x-4">
                <div className=" w-[255px] h-[50px] flex justify-between border-[1px] items-center">
                    <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>SIZE</h3>
                    <i><FaCaretDown/></i>
                    </div>      
            </div>
            <div className="w-[60%] flex justify-between">
            <h3 className='font-dm font-bold text-[14px] leading-[18.23px] text-bl'>Apply coupon</h3>
                <h3 className='font-dm font-bold text-[14px] leading-[18.23px] text-bl'>Update cart</h3>
            </div>

           
          
           
        </div>
        <div className="w-full flex justify-end py-[64px]">
            <div className="w-[40%] relative ">
                <h5 className='absolute left-[178px] top-[-34px] font-dm font-bold text-[20px] leading-[26.04px] text-bl'>Cart totals</h5>
                <div className="w-[40%] ">
                <div className=" flex  items-center ">
                    <h6 className='border-[1px] border-[#F0F0F0] p-3 font-dm font-bold text-[16px] leading-[23px] text-bl'>Subtotal</h6>
                    <p className='border-[1px] border-[#F0F0F0] p-3 font-dm font-normal text-[16px] leading-[30px] text-gr'>389.99 $</p>
                </div>
                <div className=" flex  items-center ">
                    <h6 className='border-[1px] border-[#F0F0F0] p-3 font-dm font-bold text-[16px] leading-[23px] text-bl'>Total</h6>
                    <p className='border-[1px] border-[#F0F0F0] p-3 font-dm font-normal text-[16px] leading-[30px] text-gr'>389.99 $</p>
                </div>
                <div className=" w-[200px] mt-5 h-[50px] bg-[#262626] flex items-center justify-center">
                    <p className='text-center text-[#FFFFFF] font-dm font-bold text-[14px] leading-[18.23px]  '>Proceed to Checkout</p>
                 </div>
                
                </div>
                 </div>
                
        </div>
      </div>
    

        </Container>
    </div>
  )
}

export default Cart