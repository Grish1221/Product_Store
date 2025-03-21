import React from 'react'
import {MdDelete} from "react-icons/md";
import { Box, Image, Heading, Text, HStack, Button} from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode'
import { useProductStore } from '@/store/product';
import { toaster } from "@/components/ui/toaster"
import UpdateProductDialog from "../appComponents/Modal.jsx";

const ProductCard = ({product}) => {
  
  const textColor = useColorModeValue('gray.600','gray.200');
  const bg = useColorModeValue('white','gray.800');
  
  const {deleteProduct, updateProduct} = useProductStore();
  
  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid);
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
  }

  const handleUpdateProduct = async (editedProduct) => {
		const { success, message } = await updateProduct(product._id, editedProduct);
		if (!success) {
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
        description: "Product updated successfully",
        status: 'success',
        duration: 5000,
        isClosable: true,
     })
		}
	};
  
  return (
    <Box
        rounded="lg"
        shadow="lg"
        overflow='hidden'
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)' , shadow:'xl'}}
        bg={bg}
    >
    <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'  />

    <Box p={4}>

        <Heading as={"h3"} size="md" mb='2'>
            {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={'4'}>
            ${product.price}
        </Text>

        <HStack spacing={2}>
          <UpdateProductDialog product={product} onUpdate={handleUpdateProduct} />
					
          <Button onClick={() => handleDeleteProduct(product._id)} bg='red.400'>
              <MdDelete/>
          </Button>

				</HStack>

    </Box>
  </Box>
  );
};

export default ProductCard