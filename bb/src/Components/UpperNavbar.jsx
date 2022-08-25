import { Box, Flex, Image, Input, Select, Stack } from "@chakra-ui/react";


export default function UpperNavbar() {
    return (
        <>
            <Stack direction='row' width={"80%"} margin={"auto"} >
                <Flex alignItems={"center"}  >
                    <Box >
                        <Image
                            width={"300px"}
                            height={"4rem"}
                            src='https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png'
                            alt='Dan Abramov'
                        />
                    </Box>

                    <Box width={'18rem'}>
                        <Select placeholder='All Ctaegories' size='sm' >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>

                    <Box width={'18rem'} >
                        <Input type="text" placeholder="Enter your search.." size='sm' />
                    </Box>
                </Flex>
            </Stack>
        </>
    )
}