import { Box, Button, Center, Flex, Heading, Image, Input, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import sytles from "./Footer.module.css"

export default function FooterComponent() {
    return (
        <SimpleGrid column={[1, 2, 3, 4]} marginTop={"0.8rem"} bg={"#232323"} className={sytles.ocean} >
            <Flex margin={"auto"} justifyContent="flex-start" width={"80%"} paddingBottom={"2rem"} borderBottom={"1px solid white"}>
                <Flex flexDirection='column' color='white' marginRight={"8rem"} >
                    <Heading className={sytles.box_margin} as='h3' size='sm' noOfLines={1}>
                        CONTACT INFO
                    </Heading>
                    <Center >
                        <Text _hover={{ color: "pink", cursor: "pointer" }} color='#8c9d98'>(+91) 7877061041</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >support@beautybebo.com</Text>
                    </Center>
                    <Center >
                        <Text className={sytles.sales_margin} color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >sales@beautybebo.com</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Open time: 10:00AM - 7:00PM</Text>
                    </Center>

                </Flex>
                <Flex flexDirection='column' color='white' marginRight={"8rem"}>
                    <Heading className={sytles.box_margin} as='h3' size='sm' noOfLines={1}>
                        QUICK LINKS
                    </Heading>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >About Us</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Contact Us</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Terms & Conditions</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Privacy Policy</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Return & Refund Policy</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Shipping Policy</Text>
                    </Center>

                </Flex>
                <Flex flexDirection='column' color='white' marginRight={"8rem"}>
                    <Heading className={sytles.box_margin} as='h3' size='sm' noOfLines={1} >
                        CUSTOMER INFO
                    </Heading>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >My Acoount</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Track Your Order</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Return Orders</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Wishlist</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >News & Event</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >FAQ</Text>
                    </Center>

                </Flex>
                <Flex flexDirection='column' color='white' marginRight={"8rem"}>
                    <Heading className={sytles.box_margin} as='h3' size='sm' noOfLines={1}>
                        CATEGORIES
                    </Heading>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Makeup</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Hair</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Skin</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Personal Care</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Mon & Baby Care</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Ayurveda</Text>
                    </Center>
                    <Center >
                        <Text color='#8c9d98' _hover={{ color: "pink", cursor: "pointer" }} >Fragrance</Text>
                    </Center>

                </Flex>

            </Flex>

            <Flex className={sytles.Bottom_footer}>
                <Box >
                    <Image height={"80%"} width={"100%"} src='https://www.beautybebo.com/pub/media/wysiwyg/payment.png' alt='payment img' />
                </Box>
                <Spacer />
                <Flex>
                        <Text>Signup For Newsletter</Text>
                        <Input padding={"20px 0px 20px 10px"} bg={"white"}  borderRadius={"0px"} type="text" placeholder="sign up for Newsletter" />
                        <Button margin-left={"20px"} padding={"20px 30px 20px 40px"} bg={"#dd0285"} color={"white"} borderRadius={"0px"} >Subscribe</Button>
                    
                </Flex>
            </Flex>
                <Flex bg={"black"}>
                    <Text margin={"auto"}  color={"white"}>© 2020 All Rights Reserved.</Text>
                </Flex>

        </SimpleGrid>
    )
}