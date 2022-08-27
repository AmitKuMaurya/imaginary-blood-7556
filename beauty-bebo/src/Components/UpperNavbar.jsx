import { Box, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { Button } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";

export default function UpperNavbar() {
    return (
        <>
            <Stack direction='row' width={"80%"} margin={"auto"} >
                <Flex alignItems={"center"}  >
                    <Box >
                        <Image
                            padding={"20px"}
                            width={"300px"}
                            height={"6rem"}
                            src='https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png'
                            alt='Dan Abramov'
                        />
                    </Box>

                    <Box width={'18rem'}>
                        <Select placeholder='All Ctaegories' size='md' >
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
                        <Input type="text" placeholder="Enter your search.." size='md' />
                    </Box>

                    <Button _hover={{ bg: "#dd0285" }} borderRadius='0px' bg={"#dd0285"}><SearchIcon color="white" /></Button>

                    {/* <WarningIcon  color="red.500" /> */}

                </Flex>
                <Spacer />
                <Flex gap="3" alignItems={"center"}  >


                    <Box  >

                        <Button borderRadius='0px' bg={"white"} border={"1px solid black"} > <StarIcon w={5} h={5} color="red.500" /> </Button>

                    </Box>
                    <Spacer />
                    <Box>
                        <Menu>
                            <MenuButton as={Button} bg={"white"} rightIcon={<ChevronDownIcon />}>
                                My Account
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Login</MenuItem>
                                <MenuItem>Register</MenuItem>
                            </MenuList>
                        </Menu>

                    </Box>

                </Flex>

            </Stack>
        </>
    )
}