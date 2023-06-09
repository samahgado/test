"use client"

import React from 'react'
import Link from 'next/link'
import { ChakraProvider } from '@chakra-ui/react'
import { FormControl,FormErrorMessage, FormLabel, Textarea ,FormHelperText} from '@chakra-ui/react'
import { Formik} from 'formik';
 import * as Yup from 'yup';
 


 const SpecialInstructionSchema = Yup.object().shape({
  specialInstruction: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    
   });



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

      
      <ChakraProvider>
        <div className='my-10 ' > 
          <Formik 
          initialValues={{
            specialInstruction : '',
         }}
         validationSchema={SpecialInstructionSchema}
          onSubmit={values => {
            console.log(values);
       }}
          >
           {({ handleSubmit, handleChange, values, touched, errors }) => (
          
            <form className="" onSubmit={handleSubmit}>
              
        
          <FormControl
                
                isInvalid={!!errors.specialInstruction && touched.specialInstruction}
              >
                 <FormLabel htmlFor='discountCode' className='leading-8 text-sm font-semibold tracking-normal'>Special Instructions</FormLabel>
                <Textarea
                  id="specialInstruction"
                  
                  value={values.specialInstruction}
                  onChange={handleChange}
                  placeholder="Let us if you have any special instruction for this item"
                  
                  resize='none'
                  className='h-48 w-full text-xs  '
                  
                
                  
                />
                <FormHelperText className='font-normal text-sm py-1 px-2 text-gray-500 tracking-wide'>900 characters remaining</FormHelperText>
                <FormErrorMessage>{errors.specialInstruction}</FormErrorMessage>
              </FormControl>
              <button type='submit' className="tracking-wide w-full bg-blue-500 text-sm hover:bg-blue-600 text-white font-normal   py-2  my-4 rounded-md">
              ADD TO BAG
</button>

            </form>
             )}
          </Formik>

          
          </div>
          
          </ChakraProvider>
      

        
      
        
        
        
    </div>
  )
}
