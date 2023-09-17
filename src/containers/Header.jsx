import { Box, Text } from '@chakra-ui/react'
function Header() {
    return (
        <Box position='fixed' left='20' right="20">
            <Box w='80vw' px="4">
                <Text fontSize='3xl' fontWeight='bold' letterSpacing='wider' >FakeShop</Text>
            </Box>
        </Box>
    )
}

export default Header