import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';
let Apidata = createContext()

const ContextApi = ({children}) => {
    let [info,setInfo] = useState([])
     useEffect(()=>{
        let getdata = () =>{

        axios.get("https://dummyjson.com/products").then((response)=>{
            setInfo(response.data.products)
        })

        }
        getdata()


     },[])
     console.log(info);
  return (
    <>

    <Apidata.Provider value={info} >{children}</Apidata.Provider>





    </>
  )
}

export { ContextApi,Apidata}