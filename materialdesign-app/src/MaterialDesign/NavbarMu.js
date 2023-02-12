
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Grid, TextField, InputAdornment } from "@mui/material"
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Link, useNavigate } from "react-router-dom";
import { app, auth, onAuthStateChanged } from "../firebase/firebase-config";
import { useContext, useEffect, useState } from "react";

import React, { createContext } from "react"
import { products } from "../data/data";

import { State } from "../App";
import LoginMu from "./LoginMu";



const ContextValue = createContext()




     function NavbarMu() {

    const navigate = useNavigate()

    const { passId, setterId, watchList, setWatchList } = useContext(State)


    {console.log("renders.....from navbar")}
     



   




   

      


   // ==================================================>



   const [user ,setUser] = useState()











   


    function logOut() {


        auth.signOut().then((res) => {

            console.log(res)

            var message = "logout successfully"
            setUser("")

            navigate("/login")

          

        }).catch((error) => {
            console.log(error)
        })


    }







useEffect(()=>{

    auth.onAuthStateChanged((user) => {
        if (user) {
             
            setUser(user)

        }

        else {
            console.log("user not available please log in")
        }
    })




},[])




 






    return (


        <Grid container>

            <Grid item xs={12}>

                <AppBar position="fixed" color="inherit" elevation={0}>

                    <Toolbar>

                        <IconButton size="large" color="inherit" edge="start" onClick={()=>navigate("/")} >
                            <MovieFilterIcon />
                        </IconButton>

                        <Typography variant="h5" sx={{ flexGrow: 1 }} color="error">
                            Movies
                        </Typography>

                        <Stack direction="row" spacing={2}  >



                            {/* <Button color="inherit" component={Link} to="/login">Login</Button> */}


                           {(user)?<Button color="inherit"  onClick={()=>{
                           
                           logOut()

                           }} >logout</Button>:<Button color="inherit" component={Link} to="/login">login</Button>}


                            <Button color="inherit"  component={Link} to="/new" >New Movies</Button>

                            <Button color="inherit"  component={Link} to="/watchlist" >WatchList</Button>

                            <Button color="inherit" component={Link} to="/contact" >Contact us</Button>


                        </Stack>
                    </Toolbar>
                </AppBar>


            </Grid>
        </Grid>

    )



}

export default NavbarMu

export { ContextValue }