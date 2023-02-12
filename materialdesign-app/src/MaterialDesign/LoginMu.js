
import { Grid, TextField, Button, Typography, Box, Card, CardContent, CardMedia, InputAdornment } from "@mui/material"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import { products } from "../data/data"

import PeopleIcon from '@mui/icons-material/People';
import KeyIcon from '@mui/icons-material/Key';


export default function LoginMu() {

  var navigate = useNavigate()


  let data = {

    email: "",
    password: ""

  }

  const [values, setValues] = useState(data)




   const [error, setError] = useState("")



  { console.log("renders....") }



 











  return (


    <div style={{ marginLeft: "380px", marginRight: "380px", display: "flex", justifyContent: "center", alignItems: "center" }}>




      <Box m={10} >
        <Card >
          <CardContent style={{ width: "400px", height: "470px" }}>

            <CardMedia component="img" height="140" src={products[1].images} />


            <br />

            <Grid container justifyContent={"center"} >

              <TextField style={{ width: "300px" }} label="User Name" margin="normal" type={"email"} onChange={(e) => {
              

                 
                var em = e.target.value

                setValues({ ...values, email: `${em}` })

              }}
                variant="standard" />


              <br />

              <TextField style={{ width: "300px" }} label="Pass Word" margin="normal" type={"password"} onChange={(e) => {

                var pw = e.target.value

                setValues({ ...values, password: `${pw}` })


              }}



                variant="standard" />

              <br />

              <Button onClick={() => {
                signInWithEmailAndPassword(auth, values.email, values.password).then((response) => {


                  console.log(response)

                  navigate("/new")


                }).catch((error) => {



                  // var code = error.code

                  // setError(code)
                  console.log(error)

                })
              }} >Submit</Button>
              <br />
              <Button component={Link} to="/signup"  >New user</Button>




            </Grid>



            <Typography color="red" fontWeight=" 10px">{error}</Typography>

          </CardContent>


        </Card>
      </Box>



    </div>




  )
}


