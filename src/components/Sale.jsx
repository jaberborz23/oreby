import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaUndoAlt, FaTruck } from "react-icons/fa";
import s_1 from "../Assets/s_1.png"
import s_2 from "../Assets/s_2.png"
import s_3 from "../Assets/s_3.png"

const Sale = () => {
  return (
    <div className='py-[0px] '>


    <Container>
        

    <div className=" lg:block sm:block xxs:hidden  bg-[#F0F0F0]">

        <Flex className="justify-between  items-center">

          
            <div className="flex lg:w-25%  gap-x-2 items-center ">
           <h3 className='text-[#262626] font-bold'     >2</h3>
           <h5 className='font-dm  font-normal  leading-[20.83px] text-[16px] sm:text-[14px]    text-center text-grr'                  >Two years warranty</h5>


            </div>
            <div className="flex lg:w-25% w-[18%]  gap-x-2 items-center ">
           
           <h3><FaTruck /></h3>
           <h5  className='font-dm  font-normal  leading-[20.83px] text-[16px] sm:text-[14px]   text-center text-grr' >Free shipping</h5>


            </div>
          
            <div className="flex lg:w-25%  gap-x-2 items-center   ">
           <h3><FaUndoAlt /></h3>
           <h5  className='font-dm  font-normal  leading-[20.83px]  text-[16px] sm:text-[14px]  text-center text-grr' >Return policy in 30 days</h5>


            </div>
             
           








        </Flex>
        </div>



        <div className=" flex justify-between lg:gap-x-10 gap-x-6 py-[67px]">

            <div className="lg:w-40% w-full ">
                <div className="">
                <img src={s_1} alt="s_1" />

                </div>

               
            </div>

            <div className="lg:w-40% w-full ">
                <div className="">
                <img src={s_2} alt="s_2" />


                </div>

          



            <div className="mt-6">

            <img src={s_3} alt="s_3" />
            </div>

         
          







          </div>







        </div>









    </Container>





    </div>
  )
}

export default Sale