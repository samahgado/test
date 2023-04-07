"use client"
import Link from 'next/link'
import Search from './Search'
import { useState } from 'react'

export default function Navbar() {
  const[open,setOpen] = useState(false);
  return (
    <>
    

<nav className="border-gray-200 bg-gray-500">
  <div className="flex items-center justify-between mx-auto p-4">
  <button data-collapse-toggle="navbar-hamburger" type="button"  onClick={()=>setOpen(!open)} className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-full bg-blue-500 focus:outline-none lg:hidden" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    
    <Link href="#" className=" m-auto">
                  <img src="/Group1.svg" className="h-20 w-28 " alt="Doueihy Logo" />
                   </Link>
        
    
    
    <div className={`${open ? "block" : "hidden"} w-full  lg:block`} >
      <ul className="flex flex-col font-medium mt-4  bg-gray-50 container mx-auto p-6 lg:hidden" >
        <li>
          <Link href="#" className=" py-1 block uppercase text-blue-500 rounded  font-bold" >CATEGORIes</Link>
        </li>
        <li>
          <Link href="#" className="py-1  block text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Baklava</Link>
        </li>
        <li>
          <Link href="#" className=" py-1  block text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Kashta</Link>
        </li>
        <li>
          <Link href="#" className=" py-1  block text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Maamoul</Link>
        </li>
        <li>
          <Link href="#" className=" py-1 block text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">No sugar</Link>
        </li>
        <li>
          <Link href="#" className=" py-1 block text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Vegan</Link>
        </li>
        <li>
          <Link href="#" className=" py-1  block text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">ALL</Link>
        </li>
      </ul>
      <ul className=" w-full  p-6 flex flex-col font-medium lg:hidden  bg-blue-500 ">
        
        <li>
          <Link href="#" className="py-1 block text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About us</Link>
        </li>
        <li>
          <Link href="#" className=" py-1 block text-white rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Branches</Link>
        </li>
        <li>
          <Link href="#" className=" py-1 block text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Return & Refond</Link>
        </li>
        <li>
          <Link href="#" className=" py-1 block text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Policy</Link>
        </li>
        <li>
          <Link href="#" className=" py-1 block text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</>

  )
}
