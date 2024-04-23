import React, {useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { getDatabase, ref, onValue } from "firebase/database";

import { useSelector } from 'react-redux';


const Chkout = () => {
   


   let data = useSelector((state)=> state.single.cartItem)
   const db = getDatabase();
   let [dataChea, setDataCheak] = useState([])
  

   useEffect(() => {
      const starCountRef = ref(db, 'users/');
      onValue(starCountRef, (snapshot) => {
       snapshot.forEach((item)=>{
         setDataCheak(item.val());
       })
      });
   }, [])

   const {totalPrice, totalQuantity} = data.reduce((acc , item)=>{
      acc.totalPrice += item.price * item.quantity 
      acc.totalQuantity += item.quantity
      return acc;
     },{totalPrice:0, totalQuantity:0})
    
  return (
    <section>
    <Container>
    <div className='py-[124px]'>
        <h2 className='font-dm font-bold text-[49px] line-height:[63px] text-[#262626]'>Checkout</h2>
        <span className='font-dm font-bold text-[16px] line-height:[36px] text-[#767676]'><Link to='/'>Home</Link> / Checkout </span>
        <p className='font-dm font-normal text-[16px] text-[#767676] pt-14'>Have a coupon? <span className='text-[#262626]'>Click here to enter your code</span></p>
     </div>
     <div className='w-[80%]'>
        <h2 className='font-dm font-bold text-[39px] text-[#262626] pb-4' >Billing Details</h2>
         <form action="">
         <div className='w-[70%] flex justify-between'>
                <div className='w-[45%]'>
                    <label htmlFor="" className='font-dm font-bold text-[16px] text-[#262626]'> First Name*</label> <br /> 
                    <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text" placeholder='First Name'/> <hr />
                </div> 
                <div className='w-[45%]'>
                    <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Last Name*</label> <br />
                    <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="email" placeholder='Last Name'/> <hr />
                </div>   
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Companye Name (optional)</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text"  placeholder='Company Name'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Country *</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text"  placeholder='Please select'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Street Address *</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text"  placeholder='Please select'/> <hr />
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text"  placeholder='Please select'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Town/City *</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text"  placeholder='Town/City'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">County (optional)</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="text"  placeholder='County'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Post Code *</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="code"  placeholder='Post Code'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Phone *</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="code"  placeholder='Phone'/> <hr />
                </div>
                <div className='py-6'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Email Address *</label>
                   <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ' type="email"  placeholder='Email'/> <hr />
                </div>
         </form>
         <div className='py-[100px]'>
         <h2 className='font-dm font-bold text-[39px] line-height:[36px] text-[#262626] pb-[42px]'>Your Personal Details</h2>
           <form action="">
             <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Other Notes (optional)</label>
             <textarea className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full ring-1 ring-[gray]' name="" id="" cols="30" rows="10" placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
           </form>
         </div>
     </div>
     <div className='w-[40%] pb-[100px]'>
        <h2 className='font-dm font-bold text-[39px] text-[#262626] pb-4'>Your Order</h2>
     <table className="w-full border-collapse border border-slate-400">
        <thead >
          <tr>
            <th className="font-dm font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">Product</th>
            <th className="font-dm font-normal text-[16px] text-[#767676] text-start px-4 border border-slate-200 ">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-dm font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200">Product name x 1</td>
            <td className="font-dm font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">$</td>
          </tr>
          <tr>
            <td className="font-dm font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">Total Quantity</td>
            <td className="font-dm font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">{totalQuantity}</td>
          </tr>
          <tr>
            <td className="font-dm font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">Subtotal</td>
            <td className="font-dm font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">${totalPrice}</td>
          </tr>
          <tr>
            <td className="font-dm font-bold text-[16px] text-[#262626] text-start px-4 py-4 border border-slate-200 ">Total</td>
            <td className="font-dm font-normal text-[16px] text-[#767676] px-4 border border-slate-200 ">${totalPrice}</td>
          </tr>
        </tbody>
    </table>  
    <div className="py-[76px]">
          <div className="flex gap-x-2">
          <input type="radio" />
          <span className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Bank</span>
          </div>
          <p className='font-dm text-[14px] font-normal text-gr leading-[18.23px] ' >Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
        </div>
        <div className="py-[20px]">
          <div className="flex gap-x-2">
          <input type="radio" />
          <span className='font-dm text-[16px] font-bold text-gr leading-[23px] ' >Bank 2</span>
          </div>
          <p className='font-dm text-[16px] font-normal text-gr leading-[30px] ' >Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
          <h6 class=" mt-6 py-[16px] px-[50px] bg-bl font-dm text-[14px] leading-[18.23px] text-center text-white inline-block font-bold cursor-pointer hover:bg-gr">Proceed to Bank</h6>
        </div>             
     </div>
    </Container>
</section>
)
    
  
}

export default Chkout