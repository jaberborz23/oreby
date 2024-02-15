import React from 'react'
import Container from '../components/Container'
import { FaBars,FaCartPlus,FaRegUser,FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className='py-10'>
    <Container>
        <div className=" w-full">
            <div className="lg:mr-0 mr-4">
        <h1 className=' text-bl font-dm lg:text-[200px] text-[140px] font-bold lg:leading-[260.4px] leading-normal lg:w-[644px] w-auto pl-[77px]' > 404</h1>
        </div>
        <p className=' text-grr font-dm text-[16px] font-normal leading-[30px] xl:w-[667px] w-auto lg:pl-[77px]'> The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className=" lg:ml-[77px] ml-4 mt-[50px] relative">
        <input type='search'  className=' lg:w-[50%] w-[90%] border-2 border-[#FFFFFF]  outline-2  py-2  px-4 mx-auto  ' placeholder='Type to search'/>
        <div className="absolute top-[50%] lg:left-[730px] right-4 translate-y-[-50%] ">
            <i className=' text-[14px] '> < FaSearch/></i>
          </div>
        </div>
        <div className=" mt-[60px] ml-[69px]">
        <a href="#"  className='bg-bl   font-dm font-bold text-[14px] text-[#FFFFFF] text-center leading-[18.23px] border-2 border-white-600 px-4 py-2 hover:bg-[#fff] hover:text-[#222] '> <Link to="/">   Back to Home</Link>  </a>
        </div>
        </div>
       


    </Container>
</div>

  )
}

export default Error