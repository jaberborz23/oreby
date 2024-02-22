import React from 'react'

import { FaHeart,FaLongArrowAltLeft,FaShoppingCart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  return (
    <>
     { post.map((item,i)=>(
                    <div key={i} className=" lg:!w-[32%] xxs:w-full sm:w-[50%]">
                      <Link to={`/shop/${item.id}`}>
                    <div className=" py-3">
                    
                      <div className=" relative group">
                    
                      <img src={item.thumbnail} className='h-[300px] w-full' alt="prod1" />
                    
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
                    
                      <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 hover:bg-[#fff] hover:text-[#222] '> {item.discountPercentage} </a>
                    
                      </div>
                    
                      <div className=" flex justify-between gap-x-2 items-center pt-3">
                        
                        <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   > {item.title}  </h3>
                        <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   > {item.price} </p>
                    
                      </div>
                    
                    
                    
                    
                    </div>
                    </Link>
                      </div>
                           


                  ))}
    
    
    
    </>
  )
}

export default Post