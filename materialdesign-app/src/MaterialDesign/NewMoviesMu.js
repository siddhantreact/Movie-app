import React, { useContext, useEffect, useState } from "react"
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import PlayCircle from "@mui/icons-material/PlayCircle";
import ShareIcon from '@mui/icons-material/Share';
import { products } from "../data/data";
import { HeartBroken, Favorite } from "@mui/icons-material"
import { State } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function NewMoviesMu() {

    var movie

    { console.log("renders.....from new movies") }

    const { watchList, setWatchList, videoUrl, setVideoUrl, list, setList } = useContext(State)

    const navigate = useNavigate()

    const [data, setData] = useState()

    const [input, setInput] = useState()

    const [search, setSearch] = useState()



    useEffect(() => {



        async function fetchRequest() {

            const response = await fetch("http://www.omdbapi.com/?apikey=75ad5700")

            const moviesData = await response.json()

             setData(moviesData)

        }


        fetchRequest()



    }, [])


 {console.log(data)}









    return (


        <div  style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>


            <div className="input" style={{ marginTop: "7rem" }}>

                <input className="search" type={"text"} placeholder="search movie" onChange={(e) => {

                    setInput(e.target.value)


                    const item = products.filter((e) => {

                        return e.name.includes(input)

                    })

                    setList(item)



                }} />


              



            </div>



            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "0 8rem" }}>









                {


                    list?.map((ele) => {


                        return (



                            <Box m={2} key={ele.id} marginTop="80px" style={{ display: "" }} >


                                <Card style={{ width: "300px", height: "400px" }}>

                                    <CardContent >

                                        <CardMedia component="img" height="140" src={ele.images} />




                                        <Typography variant="body2" color={"GrayText"} marginTop="10px">

                                            {ele.description}
                                        </Typography>

                                    </CardContent>

                                    <CardActions style={{ marginTop: "50px", justifyContent: "space-between" }}>
                                        <Button variant="outlined" color="primary" startIcon={<Favorite />} onClick={() => {

                                            console.log(ele)

                                            setWatchList([...watchList, ele])

                                        }} >Like</Button>





                                        <Link to={"/play"}><Button variant="outlined" startIcon={<PlayCircle />}  >watch</Button></Link>


                                    </CardActions>


                                </Card>


                            </Box>






                        )



                    })

                }

            </div>
        </div>

    )


}



