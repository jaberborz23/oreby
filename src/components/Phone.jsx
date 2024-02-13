import React from 'react'
import phn from "../Assets/phn.png"
import Container from './Container'
import Flex from './Flex'





const Phone = () => {
  return (
    <div  className='py-10 bg-[#F3F3F3]'>

      <Container>    


        <Flex  className="justify-between gap-x-2 " >


      <div className=" lg:w-[40%] w-full mx-auto">
        <img src={phn} alt="phn" className='w-full' />
        </div>
        <div className="lg:w-[50%] w-full mt-[45px] lg:mt-[78px]">
          <h2 className='  font-dm text-[39px] font-bold text-bl leading-[50.78px] '   >Phone of the year</h2>
          <p className=' pt-6  font-dm text-[16px] font-normal text-bl leading-[30px] lg:w-[511px] w-auto '    >Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
          <div className=" mt-[37px]">
          <a href="#"  className='bg-bl   font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 hover:bg-[#fff] hover:text-[#222] ' > Shop Now</a>
          </div>


        </div>
        </Flex>

        </Container>






      











    </div>
  )
}

export default Phone