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
import { TiArrowSortedUp,TiArrowSortedDown  } from "react-icons/ti";
import { FaLongArrowAltRight  } from "react-icons/fa";
import { Apidata } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import PaginationNum from '../components/pagination/PaginationNum';

   
  

    
    const Product = () => {
      let data = useContext(Apidata)
       let [currentPage,setCurrentPage] = useState(1)
       let [perPage,setPerPage] = useState(6)
       let [cateFilter , setcateFilter] = useState([])
       let lastPage = currentPage * perPage
       let firstPage = lastPage - perPage
       let allPage  = data.slice(firstPage,lastPage)
       let pageNumber = [] 
   for( let i = 0 ; i < Math.ceil( cateFilter.length > 0 ?  cateFilter : data.length / perPage); i++){
    pageNumber.push(i)


   }
   let [category , setCategory] = useState([])
    let [showIcon , setshowIcon] = useState(false)
    let [show,setShow] = useState(false)
    let cateOne = useRef()
     
    let [showColorIcon , setshowColorIcon] = useState(false)
    let [showColor,setShowColor] = useState(false)
    let cateColor = useRef()


     let [showBrandIcon , setshowBrandIcon] = useState(false)
     let [showBrand,setshowBrand] = useState(false)
     let cateBrand = useRef()
     
    


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

      useEffect(()=>{
        document.addEventListener("click",(e)=>{
          if( cateColor.current &&       cateColor.current.contains(e.target) == true) {
            setShowColor(!showColor)
            setshowColorIcon(!showColorIcon)
            }else{
              setShowColor(false)
              setshowColorIcon(false)
           }
        })

      },[showColor])
      useEffect( ()=>{
        document.addEventListener("click",(e)=>{
          if(cateBrand.current && cateBrand.current.contains(e.target) == true){
            setshowBrand(!showBrand)
            setshowBrandIcon(!showBrandIcon)
          }else{
            setshowBrand(false)
            setshowBrandIcon(false)
          }
        })
      },[showBrand])

      useEffect(()=>{
      setCategory([... new Set(data.map((item)=> item.category))])
      },[data])
      

      let handleCategory = (citem)=>{
        let categoryFilter = data.filter((item)=> item.category == citem)
        setcateFilter(categoryFilter)
      }
      
      return (
        
        <div className='py-12'>
        <Container>
         <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/shop">Products</Link> </span>
          <Flex>
             <div className=" lg:w-[20%] w-full z-50 " >
              <div className="flex justify-between items-center cursor-pointer pt-3" ref={cateOne}>
              <h2 className='text-bl font-dm font-bold text-[20px] leading-[26.04px]  '  >Shop by Category</h2>       
                 { showIcon ? <FaMinus   />  : <FaPlus />}
              </div>
                
                
                 <div className=" flex justify-between items-center px-2 cursor-pointer">
                  { show && 
                  <ul>
                    {category.map((item,m)=>(
                       <li key={m} onClick={()=> handleCategory(item)} className='font-dm text-[16px] font-normal text-gr leading-[30px] ' > {item}</li>

                    ))
                       
                    
                    }
                   
                 
                    
                   
                  
                  </ul>
    }
                  {/* <h4 className='font-dm text-[16px] font-normal text-gr leading-[30px] '>{category}</h4>
                */}
                 </div>
                 {/* <div className=" flex justify-between items-center px-2 cursor-pointer" ref={cateOne}>
                  <h4 className='font-dm text-[16px] font-normal text-gr leading-[30px] '>Category 1</h4>
                  { showIcon ? <FaMinus  />  : <FaPlus />}
                 </div> */}
                 {/* {show && 
            <ul className='bg-[#262626] lg:w-[98%] py-2 px-2'>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Category 2</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Category 3</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Category 4</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Category 5</a></li>
            </ul>  
            } */}
            {/* <div className="pt-3">
            <div ref={cateColor} className='flex justify-between items-center pt-[20px] lg:pt-[50px] cursor-pointer z-50'>
        <h2 className='font-dm font-bold text-[14px] lg:text-[20px] line-height:[26px] text-[#262626] z-50'>Shop by Color</h2>
        {showColorIcon ? <TiArrowSortedUp /> : <TiArrowSortedDown/> } 
       </div>
       { showColor &&
       <div className='px-2 z-10'>
       <div className='flex justify-start items-center gap-4 pt-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#000000]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Black</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#FF8686]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Orange</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#7ED321]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Green</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#B6B6B6]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Gray</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[red]'></div>
          <div>
             <h2 className='font-dm font-normal text-[16px] line-height:[30px] text-[#767676]'>Red</h2>
          </div>
       </div> <hr />
       </div>

       }
            </div> */}
            {/* <div className="pt-3">
                 <div className=" flex justify-between items-center px-2 cursor-pointer" >
                 <h2 className='text-bl font-dm font-bold text-[20px] leading-[26.04px] pt-3 'ref={cateBrand} >Shop by Category</h2>
                  { showBrandIcon ?  <TiArrowSortedUp />  :  <TiArrowSortedDown />}
                 </div>
                 {showBrand && 
            <ul className='bg-[#262626] lg:w-[98%] py-2 px-2'>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Brand 1</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Brand 2</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Brand 3</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Brand 4</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Brand 5</a></li>
            </ul>  
            }

            </div> */}
                

                </div>
                 
             
             <div className="w-[80%]">
                 <div className="flex justify-between flex-wrap">
                  <Post post={allPage} cateFilter={cateFilter}  />
                 
               
                 </div>
                 <PaginationNum pageNumber={pageNumber}  paginate={paginate} next={next} previous={previous} currentPage={currentPage} />
             </div>
          </Flex>
         

           </Container>






</div>
        
      )
    }
    
    export default Product

