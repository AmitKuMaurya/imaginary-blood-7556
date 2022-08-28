import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function getProducts() {
    return fetch(`https://dry-forester-heroku.herokuapp.com/makeup_data`)
        .then((res) => res.json());
}

export default function MakeupProducts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setData(res)
            console.log(res);
        })
    }, []);

    console.log(data);

    return (
        <>
        <SimpleGrid column={[1, 2, 3, 4]} display={"grid"} templateColumns='repeat(4, 1fr)' gap={6} width={"80%"} margin={"auto"} >
            {
                data.map((item) => {
                    return (
                        <>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Image src={item.image} alt={item.title} />

                                <Box p='6'>
                                    <Box display='flex' alignItems='baseline'>
                                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            New
                                        </Badge>
                                    </Box>

                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                        >
                                        {item.title}
                                    </Box>

                                    <Box>
                                        <Box as='span' color='gray.600' fontSize='sm'>
                                            {"₹"} {item.price}

                                        </Box>
                                    </Box>

                                    <Box display='flex' mt='1' alignItems='center' justifyContent="center">
                                        {Array(5)
                                            .fill('')
                                            .map((_, i) => (
                                                <StarIcon
                                                key={i}
                                                color={i < item.raings ? 'teal.500' : 'gray.300'}
                                                />
                                                ))}
                                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                            {item.rating} reviews
                                        </Box>
                                    </Box>
                                    <Button bg={"pink"}>Add To Cart</Button>
                                </Box>
                            </Box>
                        </>
                    )
                })
            }

        </SimpleGrid>
        <Image margin={"auto"} width={"80%"} marginTop={"0.8rem"} src="https://www.beautybebo.com/pub/media/mega-menu/homepage.jpg" />
            </>
    )
}