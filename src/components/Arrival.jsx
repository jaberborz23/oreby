import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import prod1 from "../Assets/Image.png"
import prod2 from "../Assets/img_2.png"
import prod3 from "../Assets/img_3.png"
import prod4 from "../Assets/img_4.png"
import { FaHeart,FaLongArrowAltLeft,FaShoppingCart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import axios from 'axios';
import Slider from "react-slick";
import { FaLongArrowAltRight  } from "react-icons/fa";

function SampleNextArrow(props) {
  const {  className, onClick } = props;
  return (
    <div

     className='next'
      onClick={onClick}
    > <FaLongArrowAltLeft className='inline-block' /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className ,onClick } = props;
  return (
    <div
    className='prev'
      onClick={onClick}
    > <FaLongArrowAltRight className='inline-block'  /></div>
  );
}



const Arrival = () => {
  var settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
     
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
         
      },
      
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      




    ]
  };

  let [info, setInfo] = useState([])

  useEffect(()=>{
    

    let getdata = ()=>{

   axios.get("https://dummyjson.com/products").then((response)=>{
    

   setInfo(response.data.products);
   })

    }
    getdata()


  },[])
 
  return (
    <div className=''>

      <Container>

        <h2 className='px-[45px] font-dm text-[39px] font-bold text-bl leading-[50.78px]'>New Arrivals</h2>

        

        <Slider {...settings}>

         
        { info.map((item)=>(
        <div className=" lg:!w-[95%] xxs:w-full sm:w-[50%]">

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

          <div className=" flex justify-between  gap-x-2 items-center pt-3">
            
            <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   > {item.title}   </h3>
            <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   > {item.price} </p>

          </div>




        </div>
      
     
       </div>
       

        ))
       
        }
       
          </Slider>

        
          
          {/* <div className=" lg:w-[24%] xxs:w-full sm:w-[50%]">

<div className=" py-3">

  <div className=" relative group">

  <img src={prod3} alt="prod3" />

  <div className=" absolute bottom-0 left-0 lg:w-full xxs:w-full   h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">

    <div className="py-[60px] px-6 h-full">
  <div className=" flex items-center justify-end gap-x-3">
    <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
    <i><FaHeart /></i>

  </div>
  <div className=" flex items-center justify-end gap-x-3">
    <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
    <i><IoIosGitCompare /></i>

  </div>
  <div className=" flex items-center justify-end gap-x-3">
    <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
    <i><FaShoppingCart /></i>

  </div>
  </div>

  </div>

  <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 '       > New</a>

  </div>

  <div className=" flex lg:justify-between justify-start gap-x-2 items-center pt-3">
    
    <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   >Basic Crew Neck Tee</h3>
    <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   >$44.00 </p>

  </div>
  <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'  >Black</p>





</div>


         </div> */}
         {/* <div className=" lg:w-[24%] xxs:w-full sm:w-[50%] ">

<div className=" py-3">

  <div className=" relative group">

  <img src={prod4} alt="prod4" />

  <div className=" absolute bottom-0 left-0 lg:w-full xxs:w-full  h-[0px] overflow-y-hidden opacity-0 bg-[#FFFFFF] group-hover:h-[200px] duration-300 ease-in group-hover:opacity-100 ">

    <div className="py-[60px] px-6 h-full">
  <div className=" flex items-center justify-end gap-x-3">
    <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'>Add to Wish List</h4>
    <i><FaHeart /></i>

  </div>
  <div className=" flex items-center justify-end gap-x-3">
    <h4 className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'  >Compare</h4>
    <i><IoIosGitCompare /></i>

  </div>
  <div className=" flex items-center justify-end gap-x-3">
    <h4  className='text-gr font-dm text-[16px] text-right font-normal leading-[20.83px]'   >Add to Cart</h4>
    <i><FaShoppingCart /></i>

  </div>
  </div>

  </div>

  <a href="#"  className='bg-bl absolute left-[56px] top-[30px]  font-dm font-bold text-[14px] text-[#FFFFFF] leading-[18.23px] border-2 border-white-600 px-4 py-2 '       > New</a>

  </div>

  <div className=" flex lg:justify-between justify-start gap-x-2 items-center pt-3">
    
    <h3 className='  font-dm text-[20px] font-bold text-bl leading-[26.04px] '   >Basic Crew Neck Tee</h3>
    <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'   >$44.00 </p>

  </div>
  <p className='  font-dm text-[16px] font-normal text-gr leading-[30px]'  >Black</p>





</div>


         </div> */}





       





      </Container>







    </div>
  )
}

export default Arrival