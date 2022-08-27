import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function getProducts(){
    return fetch(`https://dry-forester-heroku.herokuapp.com/arrival_data`)
    .then((res)=> res.json());
}

export default function ArrivalProducts(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        getProducts().then((res) =>{
            setData(res)
            console.log(res)
    })
    },[]);

    // useEffect(() => {
    //     axios
    //       .get(`https://dry-forester-heroku.herokuapp.com/arrival_data`)
    //       .then((res) => setData(res))
    //       .catch((err) => console.log(err))
    //   }, []);

    console.log(data);

    return (
            <SimpleGrid>
                <Box>

                </Box>
            </SimpleGrid>
    )
}