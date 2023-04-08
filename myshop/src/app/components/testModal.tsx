"use client"
import React from 'react'
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


export default function TestModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
    
    
  return (


<>

    <Button onClick={onOpen}>Open Modal</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque, mollitia excepturi ullam quia sit sunt incidunt nihil in omnis amet a
            rchitecto, repellendus neque exercitationem. Ut quas exercitationem doloribus sequi!</p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>

    
  )
}
