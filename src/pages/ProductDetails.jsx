import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoIosStar,IoIosStarHalf,IoIosStarOutline } from "react-icons/io";
import { useContext } from 'react';
import { Apidata } from '../components/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/singleSlice';
import { FaRegStar } from "react-icons/fa6";

const ProductDetails = () => {
   let dispatch = useDispatch()
    let  [data,setData] = useState([])
    let productId = useParams()

    let dataId = ()=>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setData(response.data);

        })
    }
    useEffect(()=>{
        dataId()

    },[])
    
     let handleProduct = (item) =>{
    dispatch(addToCart({...item , qun:1}))
     }
     let clientRating = Array.from({length:5}, (elm,index) =>{
      let number = index + 0.5
      return(
         data.rating >= index + 1 ?    <IoIosStar /> : data.rating >= number ? <IoIosStarHalf /> : <IoIosStarOutline />
      
      )
     })

     

  return (
    <div className='py-[60px]'>
    <Container>
        <Flex className="">
          
    {data?.images?.map((item ,key)=>(
          <div className=" lg:w-[31%] w-full" key='k_3'>
        <img src={item} alt="" className='w-full' />
        </div>
    ))}
       </Flex>
       <div className="pt-6">
      <h2 className='font-dm text-bold text-[40px]'>Product</h2>
      <div className=" flex">
        {clientRating}
      {/* <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarHalf /> */}
   
      </div>
      <h4  className='font-dm font-bold text-[20px] pt-10'>${data.price}</h4>
      <div className=" flex items-center">
        <h4 className='pr-5'> QUANTITY:</h4>
        <div className=" flex h-[50px] justify-between items-center w-[150px] border-2 border-black">
          <button>+</button>
          <div className=" "> 0</div>
          <button>-</button>
        </div>
      </div>
      <div className="py-10">
        <ul>
          <li className='py-[16px] px-[50px] bg-bl font-dm text-[16px] inline-block font-bold mr-8'>Add to Wish List</li>
        <Link to="/cart" > <li onClick={()=>handleProduct(data)} className='py-[16px] px-[50px] bg-bl font-dm text-[16px] inline-block font-bold'>Add to Cart</li> </Link> 
        </ul>
      </div>
       
    </div>
    </Container>
    
    </div>
  )
}

export default ProductDetails