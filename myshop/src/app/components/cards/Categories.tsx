"use client"
import {categories} from './data'
import CategoryCard from './CategoryCard'

export default function Categories() {
  
 
  return (
    
<div className='container mx-auto p-6'>
  
  <h2 className='uppercase  mb-2 font-semibold text-lg tracking-wide'>FEATURED CATEGORIES</h2>
  

<hr className="h-px mb-8  bg-blue-500 border-0 "/>
<div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4'>
   
{categories.map( (ele,index)=> (
  <CategoryCard  key={index} title = {ele.title} cover= {ele.cover}/>
))}

</div>


</div>
  )
}
