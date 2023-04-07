"use client"
import React from 'react'

import {products} from './data'
import CardProduct from './CardProduct'

export default function Products() {
  return (
    <div className='container mx-auto p-6'>
        <h2 className='uppercase  mb-2 font-semibold text-lg tracking-wide'
        
        
        >new items</h2>
  

  <hr className="h-px mb-8  bg-blue-500 border-0 "/>
  

        <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4'>
   
        {products.map((product,index)=>(
            <CardProduct title={product.title} price={product.price} cover={product.cover}/>

        ))}
        </div>
    </div>
  )
}
