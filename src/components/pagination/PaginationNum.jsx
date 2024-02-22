 import React from 'react'
 
 const PaginationNum = ( {pageNumber ,paginate,next,previous,currentPage}) => {
  
   return (
     <>

     

<nav aria-label="Page navigation example mx-auto">
  <ul class="flex items-center justify-center -space-x-px h-8 text-sm py-10  ">
    <li onClick={previous}>
      <a  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>

    {
    pageNumber.map((item,i, pgnm)=>(
        <li key={i} onClick={()=>paginate(item)} className={ currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-[white] bg-[#a8a695] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer " : "flex items-center justify-center px-3 h-8 leading-tight text-[#222] bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer " }>
        <a>{item + 1 }</a>
  
  
     </li>
      


    ))}
  
    <li onClick={next}>
      <a  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>


     




     
     
     
     
     
     
     
     
     
     
     
     
     
     </>
   )
 }
 
 export default PaginationNum