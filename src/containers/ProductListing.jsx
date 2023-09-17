import { useDispatch, useSelector } from "react-redux"
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from '../redux/actions/productAction'
import { Box } from "@chakra-ui/react";

function ProductListing() {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            if (response.status === 200) {
                console.log('response', response?.data);
                dispatch(setProducts(response?.data));
            }
        }
        catch (e) {
            console.log('e', e);
        }
    }
    useEffect(() => { fetchProducts(); }, [])

    console.log('products', products);
    return (
        <Box pt="14">
            <ProductComponent />
        </Box>
    )
}

export default ProductListing