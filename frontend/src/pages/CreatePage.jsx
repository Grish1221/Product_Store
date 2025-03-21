import { useColorModeValue } from '@/components/ui/color-mode'
import React, {useState} from 'react'
import { Box, Button, Container, Heading, Input, VStack} from '@chakra-ui/react'
import { useProductStore } from '../store/product'
import { toaster } from "@/components/ui/toaster"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  
  const {createProduct} = useProductStore();

  const handleAddProduct = async ()=>{
    const {success, message} = await createProduct(newProduct)
    
    if(!success){
      toaster.create({
          title: "Error",
          description: message,
          status: 'error',
          duration: 5000,
          isClosable: true,
      })
    }
    else{
       toaster.create({
          title: "Success",
          description: message,
          status: 'success',
          duration: 5000,
          isClosable: true,
       })
    }

    setNewProduct({
      name: "",
      price: "",
      image: "",
    })
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
         
          <Heading as={"h1"} size={"3xl"} textAlign={"center"} mb={8}>
              Create New Product
          </Heading>

          <Box w={"600px"} bg={useColorModeValue("white", "gray.800")}
              p={6} shadow={"md"} rounded={"lg"}
          >
          <VStack spacing={4}>
            <Input 
              placeholder='Product name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorPalette={"blue"} w="full" onClick={handleAddProduct}>
              Add product
            </Button>
          </VStack>
          </Box>

      </VStack>
    </Container>
  )

}

export default CreatePage