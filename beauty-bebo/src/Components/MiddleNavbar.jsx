import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from "@chakra-ui/react"
import React from "react"
import styles from "./MiddleNavbar.module.css"

export default function MiddleNavbar() {

    const style = {
        // paddingRight : "0.6rem"
      };
  

    return (
        <>
        <div className={styles.drum}>

            <div className={styles.tank} >

                <div className={styles.container}>
                    <h2>MAKEUP</h2>
                    <h2>SKIN</h2>
                    <h2>Hair</h2>
                    <h2>PERSONAL CARE</h2>
                    <h2>MOM & BABY CARE</h2>
                    <h2>FRAGRANCE</h2>
                    <h2>AYURVEDA</h2>
                    <h2>BRANDS</h2>
                </div>

                <div style={style}>
                    <Popover>
                        <PopoverTrigger>
                            <Button _hover={{ bg: "dd0285" }} bg="#dd0285" color="white" >My Cart ^</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>Now, You have no items in your shopping cart.Please add a product first</PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>


        </div>
        </>
    )
}