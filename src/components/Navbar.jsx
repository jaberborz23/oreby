import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars,FaCartPlus,FaRegUser,FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import icon from "../Assets/Mask1.png"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from './slice/singleSlice';
const Navbar = () => {
  let data = useSelector((state)=>state.single.cartItem)
  console.log(data);

  let [cartshow , setCartShow] = useState(false)
  let [cartacc , setCartacc] = useState(false)
  let [ cartpri , setCartpri] = useState(false)

  let cartRef = useRef()
  let cartaccRef = useRef()
  let cartpriRef = useRef()

  let dispatch = useDispatch()


 

  let handlepri = ()=>{
  
 setCartpri(false)


  }
 
  







  useEffect( ()=>{

    document.addEventListener( "click",(e)=>{
   
   
 
     if( cartRef.current &&   cartRef.current.contains(e.target) == true) {
     setCartShow(!cartshow)
     }else{
     
    
     
    }
     if( cartaccRef.current &&  cartaccRef.current.contains(e.target) == true){
       setCartacc(!cartacc)
     }else{
    
    }
   if( cartpriRef.current &&  cartpriRef.current.contains(e.target) == true){
    setCartpri(!cartpri)
   }else{
   
   }
 
     
   
 
    },[cartshow,cartacc,cartpri]
    )
      } )





  







  return (
    <div  className='py-[35px] bg-[#F5F5F3] '>
 <Container>
  <div className=" mx-auto  lg:pl-[267px]">
 <Flex className='  items-center flex-wrap  '      > 
     <div className=" lg:w-[25%] relative  w-full" >
     
     <div className=" flex gap-x-3 items-center" ref={cartRef}>
     <i className=''   > <FaBars /></i>
        <p className='' > Shop by Category</p>
       
     </div>
     { cartshow &&
      <div className=" bg-bl absolute bottom-120px] w-full xxs:w-[200px] left-0 z-50">
      <ul>
        <li className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-3 hover:text-white hover:pl-5 duration-300 ease-in'> Accesories</li>
        <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-3 hover:text-white hover:pl-5 duration-300 ease-in'  > Furniture</li>
        <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-3 hover:text-white hover:pl-5 duration-300 ease-in'   >Electronics</li>
        <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-3 hover:text-white hover:pl-5 duration-300 ease-in'  >Clothes</li>
        <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-3 hover:text-white hover:pl-5 duration-300 ease-in'   >Bags</li>
        <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-3 hover:text-white hover:pl-5 duration-300 ease-in'   >  Home appliances</li>
      </ul>
     </div>

     }
    

     </div>
     <div className=" lg:w-[50%]  w-full  relative py-2">
   <input type="search" className='w-[87%] border-2 border-[#FFFFFF]  outline-1  py-2  px-4 rounded-[56px] ' placeholder='Search Products....'  />
   <div className="absolute top-[50%] lg:right-[40px] right-4 translate-y-[-50%] ">

   <i className=' text-[14px] '> < FaSearch/></i>
   </div>
   
     
     </div>



   





     <div className=" lg:w-[25%]  w-full xxs:py-4  ">
      <div className=" flex lg:justify-center justify-end gap-x-6 relative">

        <div className=" flex gap-x-2 cursor-pointer" ref={cartaccRef}>
        <FaRegUser/>
        <IoMdArrowDropdown />
            </div> 
          { cartacc &&
            <div className=" bg-bl w-[170px] absolute top-[50px] right-0 lg:left-0 z-50">
            <ul>
            <li className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-2 hover:text-bl hover:pl-5 duration-300 ease-in hover:bg-white'   >  My Account</li>
            <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-2 hover:text-bl hover:pl-5 duration-300 ease-in hover:bg-white'   > <Link to="/login"  >    Log in </Link></li>
            </ul>
          </div>

          }
          
        <div className=" relative  ">
         <div className=" cursor-pointer"   ref={cartpriRef} >
         <FaCartPlus/>
         </div>
         { cartpri &&
          
            <div className=" w-[200px]  bg-[#F5F5F3] absolute top-[50px] right-0 z-50  ">

              {data.map((item,index)=>(
             
             <div className="">
             <div className=" flex justify-evenly gap-x-3">
             <img src={item.thumbnail} alt="icon" width="70px" height="70px" />
             <div className="">
               <p className='font-dm text-[14px] leading-normal font-bold'>{item.title}</p>
               <h6  className='font-dm text-[14px] leading-normal font-bold'    >${item.price}</h6>
             </div>
              <div className="">
              <i onClick={()=>dispatch(removeProduct(index))}   ><RxCross2 /></i>
              </div>
           </div>
           <div className=" py-3 bg-[#FFFFFF]">
           <p  className='font-dm text-[16px] leading-[23px] font-bold text-gr'  >Subtotal: <span className='font-dm text-[16px] leading-[23px] font-bold text-bl'  > $44.00</span></p>
         <div className="flex gap-x-2 py-3 bg-[#FFFFFF]">  
         <Link to="/cart"   className='font-dm text-[14px] leading-[18.23px] font-bold text-bl bg-white border-2 border-gr p-2 hover:text-white hover:bg-bl'   >   View Cart   </Link> 
         <Link className='font-dm text-[14px] leading-[18.23px] font-bold text-white border-2 bg-bl border-gr p-2 hover:text-bl hover:bg-white   '    > Checkout</Link> 
         </div>
     
         
 
 
           </div> 
           </div>
          
           ))}
           {/* <div className=" py-3 bg-[#FFFFFF]">
           <p  className='font-dm text-[16px] leading-[23px] font-bold text-gr'  >Subtotal: <span className='font-dm text-[16px] leading-[23px] font-bold text-bl'  > $44.00</span></p>
         <div className="flex gap-x-2 py-3 bg-[#FFFFFF]">  
         <a><Link to="/cart"   className='font-dm text-[14px] leading-[18.23px] font-bold text-bl bg-white border-2 border-gr p-2 hover:text-white hover:bg-bl'   >   View Cart   </Link> </a> 
         <a > <Link className='font-dm text-[14px] leading-[18.23px] font-bold text-white border-2 bg-bl border-gr p-2 hover:text-bl hover:bg-white   '    > Checkout</Link> </a>
         </div>
     
         
 
 
           </div> */}
       

       
               
              
              
              
          
             
  

            
          
  
          </div>
         

         
         
           

         
      //    <div className=" w-[200px]  bg-[#F5F5F3] absolute top-[50px] right-0 z-50  ">
      //   //   <div className=" flex justify-evenly gap-x-3">
      //   //     <img src={icon} alt="icon" width="60px" height="60px" />
      //   //     <div className="">
      //   //       <p className='font-dm text-[14px] leading-normal font-bold'>Black Smart Watch</p>
      //   //       <h6  className='font-dm text-[14px] leading-normal font-bold'    >$44.00</h6>
             
      //   //     </div>
      //   //      <div className=""  onClick={handlepri} >

      //   //      <i><RxCross2 /></i>
      //   //      </div>
          

      //   //   </div>
      //   //   <div className=" py-3 bg-[#FFFFFF]">

         
      //   //   <p  className='font-dm text-[16px] leading-[23px] font-bold text-gr'  >Subtotal: <span className='font-dm text-[16px] leading-[23px] font-bold text-bl'  > $44.00</span></p>
      //   // <div className="flex gap-x-2 py-3 bg-[#FFFFFF]">  
      //   //  <a href="#"   className='font-dm text-[14px] leading-[18.23px] font-bold text-bl bg-white border-2 border-gr p-2 hover:text-white hover:bg-bl'   >   View Cart   </a>
      //   //  <a href="#" className='font-dm text-[14px] leading-[18.23px] font-bold text-white border-2 bg-bl border-gr p-2 hover:text-bl hover:bg-white   '    > Checkout</a>
        
      //   // </div>


      //   //   </div>


      //  </div>
}
        

       

        </div>
      

   
        </div>
     </div>
   



 </Flex>




</div>

 </Container>






    </div>
  )
        }

export default Navbar