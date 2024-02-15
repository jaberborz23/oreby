import React, { useContext } from 'react'
import Container from '../components/Container'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Flex from '../components/Flex';
import prod1 from "../Assets/Image.png"
import prod2 from "../Assets/img_2.png"
import prod3 from "../Assets/img_3.png"
import prod4 from "../Assets/img_4.png"
import { FaHeart,FaLongArrowAltLeft,FaShoppingCart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import axios from 'axios';
import Slider from "react-slick";
import { FaLongArrowAltRight  } from "react-icons/fa";
import { Apidata } from '../components/ContextApi';

   
  

    
    const Product = () => {
      let data = useContext(Apidata)
      console.log(data);
      return (
        
        <div className='py-12'>
        <Container>
         <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/shop">Products</Link> </span>
          <Flex>
             <div className=" w-[20%]">
                 <h1>Under Construction</h1>
             </div>
             <div className="w-[80%]">
                 <div className="flex justify-between flex-wrap">
                  { data.map((item)=>(
                    <div className=" lg:!w-[32%] xxs:w-full sm:w-[50%]">

                    <div className=" py-3">
                    
                      <div className=" relative group">
                    
                      <img src={prod1} className='h-[300px] w-full' alt="prod1" />
                    
                      <div className=" absolute bottom-0 left-0 lg:w-[full] xxs:w-full  h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">
                    
                        <div className="py-[60px] px-6 h-full">
                      <div className=" flex items-center justify-end gap-x-3">
                        <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
                        <i><FaHeart /></i>
                    
                      </div>
                      <div className=" flex items-center justify-end  gap-x-3">
                        <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
                        <i><IoIosGitCompare /></i>
                    
                      </div>
                      <div className=" flex items-center justify-end gap-x-3">
                        <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
                        <i><FaShoppingCart /></i>
                    
                      </div>
                      </div>
                    
                      </div>
                    
                      <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 hover:bg-[#fff] hover:text-[#222] '> new </a>
                    
                      </div>
                    
                      <div className=" flex justify-between gap-x-2 items-center pt-3">
                        
                        <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   > title  </h3>
                        <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   > price </p>
                    
                      </div>
                    
                    
                    
                    
                    </div>
                    
                    
                      </div>
                           


                  ))}
               
                 </div>
             </div>
          </Flex>
         

           </Container>






</div>
        
      )
    }
    
    export default Product

