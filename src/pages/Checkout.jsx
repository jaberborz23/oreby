import React, { useContext, useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { getDatabase, ref, onValue } from "firebase/database";
import {  useSelector } from 'react-redux';

const Checkout = () => {
 
  let data = useSelector((state)=> state.single.cartItem)
  const db = getDatabase();
  let [datacheck,setDatacheck] = useState([])
  useEffect(()=>{
    const starCountRef = ref(db, 'users/' );
onValue(starCountRef, (snapshot) => {
 snapshot.forEach((item)=>{
  setDatacheck(item.val());

 })

});
  },[])
  

  const {totalPrice , totalQuantity} = data.reduce(( accu , currVal)=>{
    accu.totalPrice +=  currVal.price * currVal.qun
    accu.totalQuantity += currVal.qun
    return accu; 

},{totalPrice:0 , totalQuantity:0})


const onToken = (token) => {
  fetch('/save-stripe-token', {
    method: 'POST',
    body: JSON.stringify(token),
  })
  .then(response => response.json())
  .then(data => {
    alert(`We are in business, ${data.email}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
};


  return (
    <div>
      <Container>
      <h1 className='font-dm text-[49px] font-bold text-bl leading-[63.8px] '>Checkout</h1>
      <span className=' font-dm text-[12px] font-normal text-grr leading-[15.62px] '> <Link to="/"> Home</Link> {'>'} <Link to="/checkout">Checkout</Link> </span>

      <div className=" flex items-center mt-9">
        <h3>Have a coupon?</h3>
        <span> Click here to enter your code</span>
      </div>
      <div className=" pt-[57px]">
      <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Billing Details</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >First Name *</h3>
         <h2> {datacheck.username}</h2>
         <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1       py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='First Name'   />     <hr/>
       </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Last Name *</h3>
        <input type="text"  class=" lg:w-[100%] w-auto border-1 border-[#FFFFFF]  outline-1    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Last Name'/> <hr/> 
        </div>
      </div>
        </div>
        <div className="py-[67px]">
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Company  Name (Optional)</h3>
        <h2> {datacheck.email}</h2>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Company Name'/> <hr/> 
        </div>
        </div>
        <div className=""> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Country</h3>
       
         <label for="cars" className='font-dm text-[14px] font-bold text-gr leading-[18.23px] '>Please select</label> 
<select id="country" name="country" form="countryform" className='ml-10 font-dm text-[15px] font-bold text-gr leading-[18.23px] '   >
   <option value=" Djibouti"> Djibouti </option>
    <option value="Congo">Congo</option>
   <option value="Usa">Usa</option>
   <option value="Uk">Uk</option>
</select> 
<hr/>
   </div>
   <div className=" py-[56px]">
   <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Street Address *</h3>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='House number and street name'/> <hr/> 
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px] mt-3    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Apartment, suite, unit etc. (optional)'/> <hr/> 
   
   </div>
   <div className=" py-[56px]">
   <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Town/City *</h3>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Town/City'/> <hr/> 
       </div>
       <div className=" py-[56px]">
   <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >County (optional)</h3>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='County'/> <hr/> 
       </div>
       <div className=" py-[56px]">
   <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Post Code *</h3>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Post Code'/> <hr/> 
       </div>
       <div className=" py-[56px]">
   <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Phone *</h3>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Phone'/> <hr/> 
       </div>
       <div className=" py-[56px]">
   <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Email Address *</h3>
        <input type="text"  class=" lg:w-[40%] w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Email'/> <hr/> 
       </div>
       <div className="py-[67px]">
        <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Additional Information</h2>
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Other Notes (optional)</h3>
        <input type="text"  class=" lg:w-[40%] mt-4 lg:h-[80px] h-auto w-auto border-1 border-[#FFFFFF]  outline-1 placeholder:pr-[67px]    py-2 px-[67px]  "  maxlength="300" name="inputData"   placeholder='Notes about your order, e.g. special notes for delivery.'/> <hr/> 
       <div className="py-[22px]">
       <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Your Order</h2>  <hr/>
        <div className="flex gap-x-[45px] items-center ">
          <h6 className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Product</h6>
          <p className='font-dm text-[16px] font-normal text-gr leading-[30px] '>Total</p>
        </div>  <hr/>
        <div className="flex gap-x-[45px] items-center mt-4">
          <h6 className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Product name x 1</h6>
          <p className='font-dm text-[16px] font-normal text-gr leading-[30px] '> $</p>
        </div>  <hr/>
        <div className="flex gap-x-[45px] items-center mt-5">
          <h6 className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Total quantity</h6>
          <p className='font-dm text-[16px] font-normal text-gr leading-[30px] '> {totalQuantity}</p>
        </div> <hr/>
        <div className="flex gap-x-[45px] items-center mt-3 ">
          <h6 className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Subtotal</h6>
          <p className='font-dm text-[16px] font-normal text-bl leading-[30px] '>{totalPrice} $</p>
        </div> <hr/>
        <div className="flex gap-x-[45px] items-center mt-3">
          <h6 className='font-dm text-[16px] font-bold text-bl leading-[23px]  ' >Total</h6>
          <p className='font-dm text-[16px] font-normal text-bl leading-[30px] '>{totalPrice} $</p>
        </div>  <hr/>
       </div>
        <div className="py-[76px]">
          <div className="flex gap-x-2">
          <input type="radio" />
          <span className='font-dm text-[16px] font-bold text-bl leading-[23px] ' >Bank</span>
          </div>
          <p className='font-dm text-[14px] font-normal text-gr leading-[18.23px] ' >Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
        </div>
        <div className="py-[20px]">
          <div className="flex gap-x-2">
          <input type="radio" />
          <span className='font-dm text-[16px] font-bold text-gr leading-[23px] ' >Bank 2</span>
          </div>
          <p className='font-dm text-[16px] font-normal text-gr leading-[30px] ' >Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
          <h6 class=" mt-6 py-[16px] px-[50px] bg-bl font-dm text-[14px] leading-[18.23px] text-center text-white inline-block font-bold cursor-pointer hover:bg-gr">Proceed to Bank
          </h6>
          <StripeCheckout
      token={onToken}
      stripeKey="

      pk_test_51P9KpxDFME4kzp221k6qc09P1jd5cZr6DMonispP9GAO9yJi9yGlhLZOcdNpEzxjTe9rTNZRif1t67qQ6PNFkFte00PoZXOlJ4"
    />



        </div>
       </div>


      </Container>
    </div>
  )
}

export default Checkout