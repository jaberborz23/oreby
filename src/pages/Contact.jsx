import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <Container>
      <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>Contacts</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/contacts">Contacts</Link> </span>
      <div className=" pt-[57px]">
      <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Your Personal Details</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  > Name</h3>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1       py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Your name here'  ></input> 
         </div>
      
      </div>
      <div className="pt-[47px]">
      <div className="flex items-center justify-start flex-wrap pt-[15px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Email</h3>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Your email here'    ></input> 
         </div>
      </div>
      </div>
      <div className='w-[90%] lg:w-[40%] pt-[23px]'>
                   <label className='font-dm font-bold text-[16px] text-[#262626] pb-[10px]' htmlFor="">Message</label><br />
                   <textarea className='w-full px-4 font-dm font-normal text-[14px] text-[#767676] ring-2  ring-[#F0F0F0] outline-2 outline-bl' placeholder='Your message here' name="" id="" cols="81" rows="5"></textarea>
                   </div>
      <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[66px] bg-bl font-dm text-[16px] text-[#FFFFFF] border-[1px] border-[#2B2B2B] inline-block cursor-pointer font-bold hover:bg-white hover:text-bl">    Post </h3>
      </div>
      <div className="pt-[130px]">
      <div className='px-2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.372330416168!2d90.3671795917661!3d23.740739864707628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a5de53a75%3A0xf27ef22645e193c6!2sJigatola%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1707942154646!5m2!1sen!2sbd" width="100%" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        </div>
      </div>
      
        </div>


      </Container>
    </div>
  )
}

export default Contact