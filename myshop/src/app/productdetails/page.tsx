import React from 'react'
import Link from 'next/link'

export default function ProductDetails() {
  return (
    <div className='container max-w-md mx-auto bg-white p-6 '>
      <div className=' border-b py-4 border-slate-300 '>
      <h2 className='text-sm font-light mb-4'>MAAMOUL</h2>
      <div className="relative ">
      <Link href="#">
          <img className='object-contain w-full overflow-hidden' src="/Maamoul.svg"alt="" />
      </Link>
      <div className="mt-3 ">
          <h4 className='font-light text-sm leading-6'>Mixed Maamoul / big</h4>
          <p className='font-medium text-sm leading-5'>25.00 USD<span className='font-light text-sm'> / 24 pieces</span></p>
      </div>
      <div className='flex absolute  bottom-16 right-3'>
        <button className='w-11 h-11  bg-blue-900 grid place-content-center mr-2 rounded'><img src='/heart.svg'/></button>
      
        <button className='w-11 h-11  bg-blue-900 grid place-content-center rounded'><img src='/share.svg'/></button>
      </div>
  </div>
      </div>

      <div className='flex justify-between my-4  '>
        <div  >
          <p className='font-medium text-base leading-9'>Description</p>
          <h4 className='font-light text-sm leading-6 '>Mixed Maamoul / big</h4>
        </div>
        <div className="flex items-center  text-center">
                <p className="font-light border-gray-300  border w-5 h-7 cursor-pointer  bg-white duration-100 hover:bg-blue-500 hover:text-blue-50"> - </p>
                <input className="h-7 w-7  bg-gray-300 text-center text-sm outline-none " value="1" min="1" />
                <p className="font-light border-gray-300  border w-5 h-7  cursor-pointer  bg-white  duration-100 hover:bg-blue-500 hover:text-blue-50"> + </p>
              </div>
      </div>

      <div>
        <h2>form</h2>
      </div>

        
      
        
        
        
    </div>
  )
}
