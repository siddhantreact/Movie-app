
import { Box } from "@mui/system"
import { useContext } from "react"
import { State } from "../App"

import {Card ,CardContent,CardActions,CardMedia,Typography,Button, Grid} from "@mui/material"

import {PlayCircle} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

export default function WatchList() {

    const { watchList, setWatchList } = useContext(State)

    const navigate = useNavigate()



    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" ,margin: "0 8rem"}}>
      
       

          
            {

                watchList?.map((ele) => {


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
                        
                                    <Button variant="outlined" startIcon={<PlayCircle />}  onClick={()=>navigate("/play")}>watch</Button>

                                </CardActions>


                            </Card>


                        </Box>

                    )


                })


            }




      

   </div>

    )



}