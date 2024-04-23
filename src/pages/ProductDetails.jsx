import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { useContext } from 'react';
import { Apidata } from '../components/ContextApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../components/slice/singleSlice';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaPlus, FaMinus,FaCaretDown  } from "react-icons/fa";
import { decrementProduct, incrementProduct, removeProduct } from '../components/slice/singleSlice';

const ProductDetails = () => {
  
  let dispatch = useDispatch()
  let [data, setData] = useState([])
  let productId = useParams()

  let dataId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setData(response.data);

    })
  }
 

  useEffect(() => {
    dataId()

  }, [])

  let handleProduct = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }))
  }
  let clientRating = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5
    return (
      data.rating >= index + 1 ? <IoIosStar /> : data.rating >= number ? <IoIosStarHalf /> : <IoIosStarOutline />

    )
  })
  let [show, setShow] = useState(false)
  let [iconShow, seticonShow] = useState(false)
  let [twoShow, settwoShow] = useState(false)
  let [plusIconShow, setPlusIconShow] = useState(false)
  let plusRef = useRef()
  let plustwoRef = useRef()




  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (plusRef?.current?.contains(e.target) === true) {
        setShow(!show);
        seticonShow(!iconShow);
      } else {
        setShow(false);
        seticonShow(false);
      } if (plustwoRef?.current?.contains(e.target) === true) {
        setPlusIconShow(!plusIconShow);
        settwoShow(!twoShow);
      } else {
        setPlusIconShow(false);
        settwoShow(false);
      }
    })
    dataId()
  }, [show, iconShow, twoShow, plusIconShow])


  return (
    <div className='py-[60px] lg:py-[120px] mx-2 lg:mx-0'>
      <Container>
        <div className="flex gap-x-2 lg:gap-x-6 flex-wrap">

          {data?.images?.map((item, n) => (
            <div className=" lg:w-[31%] w-full" key={n}>
              <img src={item} alt="" className='w-full' />
            </div>
          ))}
        </div>
        <div className="pt-6" >
          <h2 className='font-dm text-bold text-[40px]'>Product</h2>
          <div className=" flex " >
            {clientRating}
            <h3 className='font-dm font-normal text-[14px] line-height:[18px] text-[#767676]'>1 Review</h3>
          </div>
          {/* <h4 className='font-dm font-bold text-[20px] pt-10'>${data.price}</h4>
          <h5 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[26px] text-[#262626]'>$ {data.price - (data.price * data.discountPercentage / 100)}</h5>
             */}
          <div className='flex gap-8  pb-[24px]'>
            <h4 className='line-through font-dm font-normal text-[16px] lg:text-[20px] line-height:[18px] text-[#767676]'>${data.price}</h4>
            <h5 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[26px] text-[#262626]'>$ {data.price - (data.price * data.discountPercentage / 100)}</h5>
            {/* discount price ber korte hbe */}
          </div>
          <hr />
          <div className='flex gap-4 items-center pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]'>
            <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>COLOR:</h2>
            <div className='h-[15px] w-[15px] rounded-full bg-[rgba(0,0,0,0.27)] cursor-pointer'></div>
            <div className='h-[15px] w-[15px] rounded-full bg-[#FF8686] cursor-pointer'></div>
            <div className='h-[15px] w-[15px] rounded-full bg-[#7ED321] cursor-pointer'></div>
            <div className='h-[15px] w-[15px] rounded-full bg-[#B6B6B6] cursor-pointer'></div>
            <div className='h-[15px] w-[15px] rounded-full bg-[#15CBA5] cursor-pointer'></div>
          </div> <hr />
          {/* <div className=" flex items-center">
            <h4 className='pr-5'> QUANTITY:</h4>
            <div className=" flex h-[50px] justify-between items-center w-[150px] border-2 border-black">
              <button>+</button>
              <div className=" "> 0</div>
              <button>-</button>
            </div>
          </div> */}
            <div className=" w-[255px] h-[50px] flex justify-between border-[1px] items-center">
                    <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>SIZE</h3>
                    <h4>S</h4>
                    <i><FaCaretDown/></i>
                    </div> 
             <div className="lg:w-[20%] sm:w-[23%] w-full lg:pr-[32px] xxs:pr-0 ">
            <div className="w-[142px] h-[36px] flex items-center justify-between gap-x-4 border-[1px]  ">
                <i className='text-gr cursor-pointer'  ><FaPlus /></i>
                <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>1</h3>
                <i className='text-gr cursor-pointer' ><FaMinus /></i>
            </div>
              </div>


          <div className='flex items-center gap-6 pt-[20px] pb-[20px]'>
            <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>STATUS:</h2>
            <h3 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#767676]'>In stock</h3>
          </div> <hr />
          <div className="py-10">
            <ul>
              <li className='py-[16px] px-[50px] bg-bl font-dm text-[16px] text-white text-center inline-block font-bold mr-8'>Add to Wish List</li>
              <Link to="/cart" > <li onClick={() => handleProduct(data)} className='py-[16px] px-[50px] mt-3 text-white text-center bg-bl font-dm text-[16px] inline-block font-bold'>Add to Cart</li> </Link>
            </ul>
          </div>
        </div> <hr />

        <div ref={plusRef} className='flex justify-between item-center pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px] cursor-pointer'>
          <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>FEATURES  & DETAILS</h2>
          {iconShow ? <FaMinus /> : <FaPlus />}
        </div>
        {show &&
          <div className=''>
            <ul>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>1. one</li>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>2. two</li>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>3. three</li>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>4. four</li>
            </ul>
          </div>
        } <hr />

        <div ref={plustwoRef} className='flex justify-between item-center pt-[20px] pb-[20px] cursor-pointer'>
          <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>SHIPPING & RETURNS</h2>
          {plusIconShow ? <FaMinus /> : <FaPlus />}
        </div>
        {twoShow &&
          <div className=''>
            <ul>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>1. one</li>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>2. two</li>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>3. three</li>
              <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>4. four</li>
            </ul>
          </div>
        } <hr />
        <div className='pt-[20px]'>
          <p className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='flex gap-8 pt-[50px] lg:pt-[123px]'>
          <h2 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[30px] hover:text-[#262626] text-[#767676]'>Description</h2>
          <h3 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[30px] text-[#767676] hover:text-[#262626]'>Reviews (1)</h3>
        </div>
        <div className='pt-[20px] lg:pt-[42px] pb-[16px]'>
          <h2 className='font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] text-[#767676]'>1 review for Product</h2>
        </div> <hr />
        <div className='flex justify-between items-center pt-[23px] pb-[14px]'>
          <div className='flex items-center gap-6' >
            <h2 className='font-dm font-normal text-[15px] lg:text-[16px] line-height:[30px] text-[#262626]'>John Ford</h2>
            <span className='flex '>
              <FaStar className='text-[#FFD881]' />
              <FaStar className='text-[#FFD881]' />
              <FaStar className='text-[#FFD881]' />
              <FaStar className='text-[#FFD881]' />
              <FaStar className='text-[#FFD881]' />
            </span>
          </div>
        </div>
        <div className=''>
          <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[20px] text-[#767676]'>6 months ago</h2>
        </div>
        <div className='pb-[15px]'>
          <p className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div> <hr />

        <div className='pt-[53px] w-[90%] lg:[w-40%] lg:w-[40%]'>
          <h2 className='font-dm font-bold text-[18px] lg:text-[20px] line-height:[30px] text-[#262626] pb-[25px] lg:pb-[48px]'>Add a Review</h2>
          <form action="">
            <div className=''>
              <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[30px] text-[#262626]' htmlFor="">Name</label> <br />
              <input className='w-full placeholder:text-[#767676] font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] py-2 px-2 !required:border-red-500 outline-2 outline-cyan-200' type="text" placeholder='Your name here' /> <hr />
            </div>
            <div className='pt-[23px]'>
              <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[30px] text-[#262626]' htmlFor="">Email</label> <br />
              <input className='w-full placeholder:text-[#767676] font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] py-2 px-2 required:true outline-2 outline-cyan-200' type="email" placeholder='Your name here' />
            </div> <hr />
            <div className=' pt-[23px]'>
              <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[30px] text-[#262626]' htmlFor="">Review</label> <br />
              <textarea className='w-full placeholder:text-[#767676] font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] py-2 px-2 outline-2 outline-cyan-200' name="" id="" cols="81" rows="5" placeholder='Your review here'></textarea>
            </div> <hr />
            <div className='pt-[50px]'>
              <a className='py-2 px-12 border-2 border-[#262626] font-dm font-bold text-[14px] line-height:[30px] text-[#262626] hover:border-transparent hover:text-[#fff] hover:bg-[#262626] duration-300' >Post</a>
            </div>
          </form>
        </div>








      </Container>

    </div>
  )
}

export default ProductDetails