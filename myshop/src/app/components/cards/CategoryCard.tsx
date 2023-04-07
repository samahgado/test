import React from 'react'
import Link from 'next/link'




export default function CategoryCard(props:any) {
    console.log(props)
  return (
    <div className="max-w-sm bg-white mb-8 mx-auto  ">
    <Link href="#">
        <img className='object-contain w-full overflow-hidden' src={props.cover} alt="" />
    </Link>
    <div className="mt-3 flex justify-between items-center">
        <p className='font-normal text-lg uppercase'>{props.title}</p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded-md">
  SHOP
</button>
    </div>
</div> 
    
  )
}
