import { Card, Box, CardContent, Typography, TextField, Grid, Button, IconButton, CardMedia, InputAdornment } from "@mui/material"
import { useEffect, useState } from "react"
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { products } from "../data/data";
import PeopleIcon from '@mui/icons-material/People';
import KeyIcon from '@mui/icons-material/Key';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactMu() {




    const data = {
        fullName: "",
        email: "",
        contact: ""

    }



    const [values, setValues] = useState(data)

    const [error, setError] = useState("")






    async function onClickHandler() {

        console.log(values)



        if (!(values.contact && values.email && values.fullName)) {

            var message = "fill all fields"

            console.log(message)

            setError(message)
        }







        else {

            var data = await fetch("https://fir-auth-5fb6b-default-rtdb.firebaseio.com/mydataBase.json",

                //mydataBase.json is the database name we added at the end of link it will create a database by that name
                {
                    method: "POST",
                    headers: {

                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(////now the data we have is in json format but databse accepts the data in string format ....so we are changing the json data to string using stringify
                        {
                            values     //this one is the actual data that has been saved inside the states
                        }
                    )
                },

                setValues(
                    {
                        ...values,
                        contact: "",
                        email: "",
                        fullName: ""
                    }
                ),


                setError("")
            )

        }

    }




    function handle(event) {

        var fName = event.target.value

        setValues({ ...values, fullName: `${fName}` })

    }

    function ehandle(event) {


        var eMail = event.target.value


        setValues({ ...values, email: `${eMail}` })
    }

    function chandle(event) {


        var cNo = event.target.value


        setValues({ ...values, contact: `${cNo}` })
    }








    return (

        <Box m={10} style={{ marginLeft: "480px" }}>

            <Grid container style={{ padding: "10px" }} direction="column"  >
                <Card style={{ width: "400px", height: "500px", alignItems: "center", justifyContent: "center", alignContent: "center", color: "Highlight" }}>

                    <CardContent >

                        <br />
                        <CardMedia component="img" height="140" src={products[1].images} />


                        <br />
                        <TextField fontSize="small" variant="standard" label="Enter full Name" onChange={handle} style={{ margin: "dense", marginBottom: "10px", width: "300px", marginLeft: "35px" }} value={values.fullName} InputProps={{

                            startAdornment: (


                                <InputAdornment>

                                    <PeopleIcon />
                                </InputAdornment>

                            )


                        }} required></TextField>

                        <br />
                        <TextField type={"email"} variant="standard" label="Enter email address" onChange={ehandle} style={{ margin: "dense", marginBottom: "10px", width: "300px", marginLeft: "35px" }} InputProps={{

                            startAdornment: (


                                <InputAdornment>

                                    <EmailIcon />
                                </InputAdornment>

                            )


                        }} value={values.email} required></TextField>

                        <br />
                        <TextField label="Enter contact No." variant="standard" onChange={chandle} style={{ margin: "dense", marginBottom: "10px", width: "300px", marginLeft: "35px" }} value={values.contact} InputProps={{

                            startAdornment: (


                                <InputAdornment>

                                    <ContactsIcon />
                                </InputAdornment>

                            )


                        }} required></TextField>

                        <br />




                        <Button onClick={onClickHandler} style={{ color: "primary", margin: "dense", marginTop: "20px", marginLeft: "145px" }}>Submit</Button>



                        <br />

                        <Typography style={{ color: "red" }}>{error}</Typography>



                    </CardContent>

                </Card>

            </Grid>

        </Box>
    )
}






