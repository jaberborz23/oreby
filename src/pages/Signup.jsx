import React, { useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Signup = () => {
  let [fullName , setfullName] = useState("")
  let [email , setEmail] = useState("")
  let [password , setPassword] = useState("")
  let handleFullname = (e)=>{
    setfullName(e.target.value);

  }
  let handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  let handlepassword = (e)=>{
  setPassword(e.target.value)
  }
  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log("ami");
  }
  return (
    <div className='py-[48px]'>
      <Container>
      <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>SignUp</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/signup">SignUp</Link> </span>
      <div className=" py-[57px]">
        <p className='text-grr text-[16px] leading-[30px] font-dm font-normal lg:w-[644px] w-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      </div>
      <div className=" pt-[57px]">
      <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Your Personal Details</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >First Name</h3>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1       py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='First Name' onChange={handleFullname}  ></input> 
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Last Name</h3>
        <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Last Name'></input> 
        </div>
        
      </div>
      <div className="pt-[47px]">
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Email address</h3>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='company@domain.com' onChange={handleEmail}   ></input> 
         </div>
        <div className = "" >
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Telephone</h3>
        <input type="tel"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Your phone number'></input> 
        </div>
        
      </div>

      </div>
      
        </div>
        <div className=" pt-[60px]">
      <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>New Customer</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Address 1</h3>
         <input type="text"  class=" lg:w-full w-auto border-1 border-[#FFFFFF]  outline-2 placeholder:text-gr   py-2 px-[61px]  "  maxlength="400" name="inputData"   placeholder='4279 Zboncak Port Suite 6212'></input> 
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Address 2</h3>
        <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='—'></input> 
        </div>
        
      </div>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >City</h3>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Your city'/> <hr />
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Post Code</h3>
        <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='05228'/> <hr />
        </div>
        
      </div>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Division</h3>
       
         <label for="cars" className='font-dm text-[14px] font-bold text-gr leading-[18.23px] '>Please select</label> 
<select id="cars" name="district" form="districtform" className='ml-4 font-dm text-[15px] font-bold text-gr leading-[18.23px] '   >
   <option value=" Dhaka"> Dhaka </option>
    <option value="Chittagong">Chittagong</option>
   <option value="Munshiganj">Khulna</option>
   <option value="Comilla">Rangpur</option>
</select> 

         </div>
         <div className=" lg:ml-[100px] ml-0 lg:my-0 my-4 "> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >District</h3>
       
         <label for="cars" className='font-dm text-[14px] font-bold text-gr leading-[18.23px] '>Please select</label>
<select id="cars" name="district" form="districtform" className='ml-4 font-dm text-[15px] font-bold text-gr leading-[18.23px] '   >
   <option value=" Dhaka"> Dhaka </option>
    <option value="Chittagong">Chittagong</option>
   <option value="Munshiganj">Khulna</option>
   <option value="Comilla">Munshiganj</option>
   <option value="Comilla">Meherpur</option>
   <option value="Comilla">Rangpur</option>
</select> 
         </div>
      </div>
        </div>
        <div className=" py-[56px]">
        <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Your Password</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Password</h3>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData" onChange={handlepassword}   placeholder='Password'></input> 
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Repeat Password</h3>
        <input type="password"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Repeat password'></input> 
      


        </div>
      </div>
      </div>
      <div className="pt-4 flex items-center justify-start flex-wrap gap-x-3">
      <input type="checkbox"></input>
      <p className='font-dm text-[14px] font-normal text-gr leading-[18.23px]'>I have read and agree to the Privacy Policy</p>
      </div>
      <div className="pt-4 flex items-center justify-start flex-wrap gap-x-3">
        <p className='font-dm text-[14px] font-normal text-gr leading-[18.23px]'></p>
        <input type="checkbox"></input>
        <h6 className='font-dm text-[14px] font-normal text-gr leading-[18.23px]'>Yes</h6>
        <input type="checkbox"></input>
        <h6 className='font-dm text-[14px] font-normal text-gr leading-[18.23px]'>No</h6>

      
      </div>
      <div className='pt-[29px]' onClick={handleSubmit} >
      <h3 class="py-[16px] px-[77px] bg-bl font-dm text-[16px] text-[#FFFFFF] border-[1px] border-[#2B2B2B] inline-block cursor-pointer font-bold hover:bg-white hover:text-bl  ">Signin</h3>
      </div>
      <div className=" mt-5">
      <span className='font-dm text-[15px] font-normal text-gr leading-[18.23px] pb-9'> Already have account ? Please <Link to="/login"> Login</Link></span>
      </div>

      </Container>
    </div>
  )
}

export default Signup