import { Box, Flex, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const navigate = useNavigate();
    console.log('allproducts', products);
    const renderList = products?.map((product) => {
        const { id, title, price, category, image } = product;
        return (
            <>
                <Box cursor='pointer' onClick={() => navigate(`/product/${id}`)} key={id} my="4" w='40' border='1px solid' borderColor='gray.300' p="4" borderRadius='md' >
                    <Box h='full'>
                        <Flex h="50%" p="3" >
                            <Image h='95%' objectFit='scale-down' src={image} alt={image} rounded='md' />
                        </Flex>
                        <Box >
                            <Box textTransform='capitalize' fontSize='small' fontWeight='medium' >{title}</Box>
                            <Box fontSize='small' fontWeight='bold' letterSpacing='wide' >$ {price}</Box>
                            <Box textTransform='capitalize' fontSize='small' fontWeight='thin' letterSpacing='wide'>{category}</Box>
                        </Box>
                    </Box>
                </Box >
            </>
        )
    })
    return (
        <>
            <Flex justifyContent='center' flexDir='row' flexWrap='wrap' gap='4'>
                {renderList}
            </Flex>
        </>
    )
}

export default ProductComponent