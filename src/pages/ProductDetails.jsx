import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';

const ProductDetails = () => {
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

  return (
    <div className='py-[60px]'>
    <Container>
        <Flex className="">
          
    {data?.images?.map((item)=>(
          <div className=" lg:w-[31%] w-full ">
        <img src={item} alt="" className='w-full' />
        </div>
    ))}
  
       </Flex>
    </Container>
    
    </div>
  )
}

export default ProductDetails