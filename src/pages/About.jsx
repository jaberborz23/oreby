import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import ab_im from "../Assets/Image.png"
import ab_im2 from "../Assets/ab_im2.png"



const About = () => {
  return (
    <div className='py-[89px]' >
      <Container>
      <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>About</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/about">About</Link> </span>
      <div className="  flex items-center flex-wrap justify-between w-full ">
         <div className="lg:w-1/2 w-full sm:w-1/2 relative">
          <img src={ab_im} alt="ab_im" className='w-full' />
          <a   className='bg-bl absolute left-[116px] bottom-[30px]  xl:left-[335px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-[22px] py-2 ' >Our Brands</a>
         </div>
         <div className="lg:w-1/2 w-full sm:w-1/2 relative">
          <img src={ab_im2} alt="ab_im2" className='w-full' />
          <a   className='bg-bl absolute left-[116px] xl:left-[335px] bottom-[20px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-[22px] py-2 ' >Our Store</a>
         </div>
         </div>
         <div className=" w-full py-[65px]">
          <h2 className='font-dm text-[39px] font-normal text-bl leading-[52px] w-auto '>
          Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
          </h2>
         </div>
           <div className="w-full flex justify-between items-center flex-wrap py-[65px] xxs:gap-y-3 lg:gap-y-0">
            <div className=" lg:w-[31%] xxs:w-full">
              <h4 className='font-dm text-[25px] font-bold text-bl leading-[36px] w-auto' >Our Vision</h4>
              <p className='font-dm text-[16px] font-normal text-grr leading-[30px]  w-auto pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className=" lg:w-[31%] xxs:w-full">
              <h4 className='font-dm text-[25px] font-bold text-bl leading-[36px] w-auto' >Our Story</h4>
              <p className='font-dm text-[16px] font-normal text-grr leading-[30px]  w-auto pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className=" lg:w-[31%] xxs:w-full">
              <h4 className='font-dm text-[25px] font-bold text-bl leading-[36px]  w-auto' >Our Brands</h4>
              <p className='font-dm text-[16px] font-normal text-grr leading-[30px]  w-auto pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
              </div>
      </Container>
    </div>
  )
}

export default About