import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars,FaCartPlus,FaRegUser,FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import icon from "../Assets/Mask1.png"
import { useDispatch, useSelector } from 'react-redux';
import { Link ,  useNavigate } from 'react-router-dom';
import { removeProduct } from './slice/singleSlice';
import { Apidata } from './ContextApi';
const Navbar = () => {
 let navigate = useNavigate()
   let info = useContext(Apidata)
  let data = useSelector((state)=>state.single.cartItem)
   
 

  let [cartshow , setCartShow] = useState(false)
  let [cartacc , setCartacc] = useState(false)
  let [ cartpri , setCartpri] = useState(false)
  let [searchFilterFaka , setSearchFilterFaka] = useState("")
  let [searchFilter , setSearchFilter] = useState([])
  

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
      let handleSearch = (e)=>{
        setSearchFilterFaka(e.target.value)
        if(e.target.value == ""){
          setSearchFilter([])

        }else{
          let searchOne = info.filter((item)=> item.title.toLowerCase().includes(e.target.value.toLowerCase()))
          setSearchFilter(searchOne)
          
  

        }
     
      }
      let handleASearchFilter = ()=>{
       navigate("/search", { state: { searchFilter: searchFilter } })
       setSearchFilter("")
       setSearchFilterFaka("")
      

      }
      let handlekeySetup = (e) =>{
      if(e.key == "Enter"){
        navigate("/search", { state: { searchFilter: searchFilter } })
        setSearchFilter("")
        setSearchFilterFaka("")
      

      }
      
      }
     

  return (
    <div  className='py-[100px] bg-[#F5F5F3] '>
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
     <div className=" lg:w-[50%]  w-full  relative py-2 z-50">
   <input onChange={handleSearch} type="search" onKeyUp={handlekeySetup}  className='w-[87%] border-2 border-[#FFFFFF] cursor-pointer outline-1  py-2  px-4 rounded-[56px] ' placeholder='Search Products....' value={searchFilterFaka}  />
   <div className="absolute top-[50%] lg:right-[40px] right-4 translate-y-[-50%] ">
   <i className=' text-[14px] cursor-pointer ' onClick={handleASearchFilter}> < FaSearch/></i>
   {searchFilter.length > 0 &&
   <div className="   bg-[#F5F5F3] absolute top-[50px] h-[400px] overflow-y-scroll right-0 z-50  ">
  { searchFilter.map((item, q)=>(
     <div className='flex items-center hover:bg-[#ffff] rounded-t-md lg:py-6 py-2' key={q}>
     <div className=' w-[300px]'>
         <img className='h-[80px] w-[100px]' src={item.thumbnail} alt="Cart" />
     </div>
     <div className='lg:ml-4 ml-2'>
         <h2 className='font-dm font-bold lg:text-[14px] text-[10px] text-[#262626]'>{item.title}</h2>
         <p className='font-dm font-bold lg:text-[14px] text-[10px] text-[#262626] mt-2'>${item.price}</p>
     </div>
     </div>

  ))
}
       
       





       
{/* <div className=" lg:w-[600px]  w-auto  bg-[gray]  " key={q}>
<div className=" flex justify-between gap-x-3">
<img src={item.thumbnail} alt="icon" width="70px" height="70px" />
<div className="">
<h3 className='font-dm text-[14px] leading-normal font-bold'>{item.title}</h3>
<h6  className='font-dm text-[14px] leading-normal font-bold'    >${item.price}</h6>
</div>
</div>

</div> */}









</div>
 }



   




  
                        

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
            <li className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-2 hover:text-bl hover:pl-5 duration-300 ease-in hover:bg-white cursor-pointer'   > <Link to="/myaccount"> My  Account</Link>  </li>
            <li  className='font-dm text-[14px] text-[rgba(255,255,255,0.7)] leading-normal py-3 pl-2 hover:text-bl hover:pl-5 duration-300 ease-in hover:bg-white cursor-pointer'   > <Link to="/login"  >    Log in </Link></li>
            </ul>
          </div>

          }
          
        <div className=" relative  " >
         <div className=" cursor-pointer"   ref={cartpriRef}  >
         <FaCartPlus/>
         {data.length ?  <div className=" absolute top-[-10px] right-[-15px] h-5 w-5 bg-yellow-700 rounded-full text-center">
         {data.length}
         </div> : ""}
        
        
         </div>
         { cartpri &&
          
            <div className=" w-[200px]  bg-[#F5F5F3] absolute top-[50px] right-0 z-50  " >

              {data.map((item,index,m)=>(
             
             <div className="" key={m}>
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
         <Link to='/checkout' className='font-dm text-[14px] leading-[18.23px] font-bold text-white border-2 bg-bl border-gr p-2 hover:text-bl hover:bg-white   '    > Checkout</Link> 
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