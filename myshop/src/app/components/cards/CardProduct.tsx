"use client"

import React from 'react'
import Link from 'next/link'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  useDisclosure,
  Button,
  
} from '@chakra-ui/react'



export default function CardProduct(props:any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
    
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
        <button  className='w-11 h-11  bg-blue-900 grid place-content-center mr-2'><img src='/heart.svg'/></button>
      
        <button  onClick={onOpen} className='w-11 h-11  bg-blue-900 grid place-content-center '><img src='/Bag.svg'/></button>
      </div>
      <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered motionPreset="slideInRight">
      <ModalOverlay  />
      <ModalContent >
        
        <ModalCloseButton  size="lg"/>
        <ModalHeader className=' text-center mt-8'>
          <p className='text-blue-500 leading-10 text-sm font-semibold '>This Product was added to your bag</p>
          <h3 className='text-sm font-semibold  tracking-wide'>{props.title}</h3>
        </ModalHeader>
        <ModalBody>
          <img src={props.cover} alt='pro'/>
        </ModalBody>

        <ModalFooter className='grid grid-cols-1' >
        <button className="tracking-wide w-full bg-transparent text-sm hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-2  border border-blue-500 hover:border-transparent rounded-md" onClick={onClose}>
          CONTINUE SHOPPING
</button>
<Link href='/productdetails'>
<button className="my-4 tracking-wide w-full bg-blue-500 text-sm hover:bg-blue-600 text-white font-normal   py-2  rounded-md" onClick={onClose}>
PROCEED TO CHECKOUT
</button>
</Link>
        
        </ModalFooter>
      </ModalContent>
    </Modal>
  
  </ChakraProvider>
  </div>
  
  
    )
  }