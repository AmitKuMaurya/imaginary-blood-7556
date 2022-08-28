import {  Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import MakeupProducts from "./MakeupProducts";
import styles from "./MakeupProducts.module.css"
export default function MakeupNavbar() {
    return (
        <>
        <Flex width={"80%"} margin={"auto"} marginTop={"0.8rem"}  display={"flex"} justifyContent={"space-between"} className={styles.Top_banner} >
            <Image src="https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg" alt="Left banner" />
            <Image src="https://www.beautybebo.com/pub/media/mega-menu/lotus.jpg" alt="right banner" />
        </Flex>

        <Flex width={"80%"} margin={"auto"} marginTop={"0.8rem"} marginBottom={"0.8rem"} justifyContent={"space-around"}  > 
          {/* justifyContent={"space-around"} */}
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="logo" />
                <Text>Makaeup</Text>
            </Box>
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="logo" />
                <Text>Skin</Text>
            </Box>
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="logo" />
                <Text>Hair</Text>
            </Box>
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="logo" />
                <Text>Personal Care</Text>
            </Box>
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="logo" />
                <Text>Mom & Baby Care</Text>
            </Box>
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="logo" />
                <Text>Eye</Text>
            </Box>
            <Box _hover={{background:"pink.300",color:"white", cursor:"pointer" }} border={"1px solid #ececec"} padding={"10px 46px 10px 46px"}>
                <Image margin={"auto"} src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt="logo" />
                <Text>Fragrance</Text>
            </Box>
        </Flex>
        <MakeupProducts  />

        <Container >
            
            <Text>

            </Text>
        </Container>

        </>
    )
}