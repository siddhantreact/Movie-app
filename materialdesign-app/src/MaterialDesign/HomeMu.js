import React, { createContext, useContext, useEffect, useState } from "react"
import { products } from "../data/data"

import { Box, Card, CardActions, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircle from "@mui/icons-material/PlayCircle";
import { ContextValue, Value } from "./NavbarMu";
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

import { State } from "../App";



export default function HomeMu() {





    const { passId, setterId ,watchList,setWatchList } = useContext(State)



   


  
    return (



        <Grid container >


            {
                products.map((ele) => {


                    return (
                        <Grid item lg={3} sm={6} xs={12}>


                            <Box m={2} marginTop="80px" style={{ xs: "100", sm: "200", md: "300", lg: "400", xl: "500" }} >


                                <Card style={{ width: "300px", height: "400px" }}>

                                    <CardContent >

                                        <CardMedia component="img" height="140" src={ele.images} />



                                        <Typography gutterBottom variant="h7" >
                                            {ele.id}
                                        </Typography>

                                        <Typography variant="body2" color={"GrayText"} marginTop="10px">

                                            {ele.description}
                                        </Typography>

                                    </CardContent>

                                    <CardActions style={{ marginTop: "50px", justifyContent: "space-between" }}>
                                        <Button variant="outlined"  color="primary" startIcon={<ShareIcon />}>Share</Button>
                                        <Button variant="outlined" startIcon={<PlayCircle />} >watch</Button>
                                    </CardActions>


                                </Card>


                            </Box>



                        </Grid>


                    )



                })

            }


        </Grid>


    )


}

