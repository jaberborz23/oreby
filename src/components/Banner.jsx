import React from 'react'
import Container from './Container'
import bn from "../Assets/bn.png"
import vec from "../Assets/head.jpg"
import vec_1 from "../Assets/head_2.jpg"
import vec_2 from "../Assets/lorem_ipsum.jpg"

import Slider from "react-slick";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
              
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top: "50%",
                left:"50px",
                transform:"translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "black",
                padding: "20px 0",
                borderRight: "3px #fff solid",
                cursor : "pointer",
             
            
              }}
            >
              0{i + 1}
            </div>
          )
      };


  return (
    <div className='py-8 bg-[#F5F5F3]'>
        <>
  <Slider {...settings}>

  <div className="">

  <img src={bn} alt="bn" className='w-full' />


  </div>
  <div className="">

<img src={vec} alt="bn" className='w-full lg:h-[600px] h-[250px]' />


</div>
<div className="">

<img src={vec_1} alt="bn" className='w-full lg:h-[600px] h-[250px] '  />


</div>
<div className="">

<img src={vec_2} alt="bn" className='w-full lg:h-[600px] h-[250px]  ' />


</div>





  </Slider>
  </>




    </div>
  )
}

export default Banner