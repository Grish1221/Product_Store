import React , {useEffect} from 'react'
import { Container, Text , VStack, SimpleGrid} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../appComponents/ProductCard'

const HomePage = () => {
  
  const { fetchProducts, products} = useProductStore();

  useEffect(() => {
      fetchProducts();
  }, [fetchProducts]);

  console.log("products: ", products);

  return (
    <Container maxW={"container.xl"} py={"12"}>
        <VStack spacing={8}>
            
            <Text
                fontSize={'20px'}
                fontWeight = {"bold"}
                bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
                bgClip="text"
                textAlign={"center"}
            >
                Current Products 🏬
            </Text>

            <SimpleGrid
              
              columns ={{
                base: 1,
                md: 2,
                lg: 3
              }}
              w="full"
              gap={16}
              p={8}
            >
              {products.map((product) => (
                  <ProductCard 
                    key= {product._id} 
                    product={product}
                  />
              ))}

            </SimpleGrid>

            {products.length===0 && (<Text fontWeight="bold" fontSize="xl" textAlign="center" color="gray.500" >
                No products found 😢{" "}
                <Link to={"/create"} style={{color: "blue.500"}} >
                    Create a product
						    </Link>
            </Text>)}

        </VStack>
    </Container>
  )
};

export default HomePage