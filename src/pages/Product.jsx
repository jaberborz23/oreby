import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Flex from '../components/Flex';
import { FaPlus , FaMinus  } from "react-icons/fa";
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
    let [showIcon , setshowIcon] = useState(false)
    let [show,setShow] = useState(false)
    let cateOne = useRef()


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
     
      useEffect(()=>{
        document.addEventListener("click",(e)=>{
          if( cateOne.current &&       cateOne.current.contains(e.target) == true) {
            setShow(!show)
            setshowIcon(!showIcon)
            }else{
              setShow(false)
              setshowIcon(false)
           
            
           }

        })

      },[show])
      
      return (
        
        <div className='py-12'>
        <Container>
         <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/shop">Products</Link> </span>
          <Flex>
             <div className=" w-[20%]">
                 <h2 className='text-bl font-dm font-bold text-[20px] leading-[26.04px] pt-3 '>Shop by Category</h2>
                 <div className=" flex justify-between items-center px-2 cursor-pointer" ref={cateOne}>
                  <h4 className='font-dm text-[16px] font-normal text-gr leading-[30px] '>Category 1</h4>
                  { showIcon ? <FaMinus  />  : <FaPlus />}
                 </div>
                 { show &&
                 <ul className='bg-bl py-4 px-2'>
                 <li className='font-dm text-[16px] font-normal text-gr leading-[30px] '> Category 2</li>
                 <li className='font-dm text-[16px] font-normal text-gr leading-[30px] '> Category 3</li>
                 <li className='font-dm text-[16px] font-normal text-gr leading-[30px] '> Category 4</li>
                </ul> }
                 
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

