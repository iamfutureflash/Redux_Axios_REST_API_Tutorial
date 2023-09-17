import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { selectedProduct } from '../redux/actions/productAction'
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Center, Flex, Image, Spinner, Tag } from "@chakra-ui/react";
function ProductDetails() {
    const product = useSelector((state) => state?.allProducts?.product);
    const { id, title, price, image, category, description } = product || '';
    console.log('ProductDetailsproducts', product);
    const dispatch = useDispatch();
    const { productID } = useParams();
    console.log('useParams', useParams());
    const url = 'http://fakestoreapi.com/products/'
    const navigate = useNavigate();
    const fetchSelectedProducts = async () => {
        if (!productID) navigate('/');
        try {
            const response = await axios.get(`${url}${productID}`);
            if (response.status === 200) {
                console.log('fakestoreapi', response?.data);
                dispatch(selectedProduct(response?.data));
            }
        }
        catch (e) {
            console.log('e', e);
        }
    }
    useEffect(() => {
        fetchSelectedProducts();
        return () => {
            dispatch(selectedProduct({}));
        }
    }, [])
    return (
        <>
            {Object.keys(product).length === 0 ?
                <>
                    <Center position='absolute' top="50%" left='50%'>
                        <Spinner size='xl' />
                    </Center>
                </>
                :
                <Flex justifyContent='center' alignItems='center' key={id} my="4" borderRadius='md' pt='28' >
                    <Box h='full' px="6" py="4">
                        <Flex p="3" justifyContent='center'>
                            <Image w='30vw' objectFit='scale-down' src={image} alt={image} rounded='md' />
                        </Flex>
                        <Box >
                            <Flex gap="4">
                                <Tag textTransform='capitalize' size='lg' key={title} variant='solid' colorScheme='linkedin' >{title}</Tag>
                                <Tag size='md' key={category} variant='solid' colorScheme='teal'>{category}</Tag>
                                <Button size='sm' variant='solid' colorScheme='pink'>Add to cart</Button>
                                <Tag size='md' key={price} variant='solid' colorScheme='green' >$ {price}</Tag>
                            </Flex>
                            <Box gap="3" textTransform='capitalize' fontSize='small' fontWeight='thin' letterSpacing='wide'>
                                <Flex py="2" gap='2' flexWrap='wrap'>
                                    <Tag size='sm' variant='subtle' colorScheme='facebook' textTransform='capitalize' >{description}</Tag>
                                    {/* <Tag size='md' key={rate} variant='solid' colorScheme='teal'>
                                {rate}
                            </Tag> */}
                                    {/* <Tag size='md' key={count} variant='solid' colorScheme='teal'>
                                {count}
                            </Tag> */}
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex >
            }
        </>
    )
}

export default ProductDetails