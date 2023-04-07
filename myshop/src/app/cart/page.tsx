"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { Input ,FormControl,FormErrorMessage, FormLabel} from '@chakra-ui/react'

import { BsTrash} from 'react-icons/bs'
import { Formik} from 'formik';
 import * as Yup from 'yup';


 const DiscountSchema = Yup.object().shape({
   discountCode: Yup.string()
     .min(7, 'Too Short!')
     .max(50, 'Too Long!')
     .required('form test')
    });



export default function Cart() {
  return (
    <div className='container mx-auto p-6'>
        <h2 className='uppercase text-sm font-semibold tracking-normal '>my bag</h2>
        <section className='grid grid-cols-5 border-b py-7 border-slate-300 '>
            <div className='font-medium text-sm leading-8 col-span-2'>
                <p>Product name:</p>
                <p>Price:</p>
                <p className='mt-2'>Quantity:</p>
            </div>
            <div className='font-light text-sm col-span-2'>
                <p className='leading-8'>Mixed Maamoul /big</p>
                <p className='leading-8'>25 USD</p>
                <div className="flex items-center  text-center  mt-2">
                <p className=" font-light border-gray-300  border w-5 h-7 cursor-pointer  bg-white duration-100 hover:bg-blue-500 hover:text-blue-50"> - </p>
                <input className="h-7 w-7  bg-gray-300 text-center text-sm outline-none " value="1" min="1" />
                <p className="  font-light border-gray-300  border w-5 h-7  cursor-pointer  bg-white  duration-100 hover:bg-blue-500 hover:text-blue-50"> + </p>
              </div>
            </div>
            <div className='grid self-end justify-end '>
           <BsTrash className='w-6 h-7 ' /> 
        
                </div>
            
        </section>
        <ChakraProvider>
        <div className='my-10 ' > 
          <Formik 
          initialValues={{
            discountCode : '',
         }}
         validationSchema={DiscountSchema}
          onSubmit={values => {
            console.log(values);
       }}
          >
           {({ handleSubmit, handleChange, values, touched, errors }) => (
          
            <form className="" onSubmit={handleSubmit}>
              
        
          <FormControl
                
                isInvalid={!!errors.discountCode && touched.discountCode}
              >
                 <FormLabel htmlFor='discountCode' className='uppercase text-base font-bold tracking-wide text-blue-500'>DISCOUNT CODE</FormLabel>
                <Input
                  id="discountCode"
                  type="text"
                  value={values.discountCode}
                  onChange={handleChange}
                  placeholder="Enter code here if  you have one"
                  
                />
                <FormErrorMessage>{errors.discountCode}</FormErrorMessage>
              </FormControl>
              <button type='submit' className="tracking-wide w-full bg-blue-500 text-sm hover:bg-blue-600 text-white font-normal   py-2  my-4 rounded-md">
APPLY
</button>
            </form>
             )}
          </Formik>
          
          </div>
          </ChakraProvider>
          <div>
          <h2 className='uppercase text-sm font-semibold tracking-normal text-blue-500'>total</h2>
          <section className='grid grid-cols-2'>
            <div className='font-light text-sm leading-8'>
              <p>Subtotal (Excl. tax)</p>
              <p>Tax (11%)</p>
              <p>Shipping</p>
              <p>Grand total</p>
            </div>
            <div className='grid justify-end font-semibold text-sm'>
              <p>18 USD</p>
              <p>18 USD</p>
              <p>18 USD</p>
              <p>18 USD</p>
            </div>

          </section>
          <button className="tracking-wide w-full bg-transparent text-sm hover:bg-blue-500 text-blue-700 font-normal my-6 hover:text-white py-2  border border-blue-500 hover:border-transparent rounded-md">
          CONTINUE SHOPPING
</button>
<button className="tracking-wide w-full bg-blue-500 text-sm hover:bg-blue-600 text-white font-normal   py-2  rounded-md">
PROCEED TO CHECKOUT
</button>
<p className='my-2 text-sm text-gray-400 font-normal'>Shipping will be handled by DHL</p>
          </div>

       
    </div>
  )
}
