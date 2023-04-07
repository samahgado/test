import React from 'react'
import Link from 'next/link'


export default function CardProduct(props:any) {
    return (
      
  
  <div className="max-w-sm bg-white relative mx-auto ">
      <Link href="/productdetails">
          <img className='object-contain w-full overflow-hidden' src={props.cover} alt="" />
      </Link>
      <div className="mt-3 ">
          <h4 className='font-light text-sm '>{props.title}</h4>
          <p className='font-semibold text-sm'>{props.price} <span className='font-light text-sm'> / KG</span></p>
      </div>
      <div className='flex absolute  bottom-16 right-3'>
        <button className='w-11 h-11  bg-blue-900 grid place-content-center mr-2'><img src='/heart.svg'/></button>
      
        <button className='w-11 h-11  bg-blue-900 grid place-content-center '><img src='/Bag.svg'/></button>
      </div>
  </div>
  
  
    )
  }