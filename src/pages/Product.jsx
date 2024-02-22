import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Flex from '../components/Flex';
import prod1 from "../Assets/Image.png"
import prod2 from "../Assets/img_2.png"
import prod3 from "../Assets/img_3.png"
import prod4 from "../Assets/img_4.png"
import axios from 'axios';
import Slider from "react-slick";
import { FaLongArrowAltRight  } from "react-icons/fa";
import { Apidata } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import PaginationNum from '../components/pagination/PaginationNum';

   
  

    
    const Product = () => {
      let data = useContext(Apidata)
       let [currentPage,setCurrentPage] = useState(1)
       let [perPage,setPerPage] = useState(6)
       let lastPage = currentPage * perPage
       let firstPage = lastPage - perPage
       let allPage  = data.slice(firstPage,lastPage)
       let pageNumber = [] 
   for( let i = 0 ; i < Math.ceil(data.length / perPage); i++){
    pageNumber.push(i)


   }


       let paginate = (pageNumber)=>{
        setCurrentPage(pageNumber + 1)

       }
       let next = ()=>{
        if(currentPage < pageNumber.length){
          setCurrentPage((state)=> state + 1)
        }

       }
       let previous = ()=>{
        if(currentPage > 1){
          setCurrentPage((state)=> state - 1)
        }

       }
      
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
                  <Post post={allPage}  />
                 
               
                 </div>
                 <PaginationNum pageNumber={pageNumber}  paginate={paginate} next={next} previous={previous} currentPage={currentPage} />
             </div>
          </Flex>
         

           </Container>






</div>
        
      )
    }
    
    export default Product

