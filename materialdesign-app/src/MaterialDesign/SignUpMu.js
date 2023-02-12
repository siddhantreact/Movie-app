import { Box, Grid, TextField, Button, Card, Typography, CardContent, CardMedia, InputAdornment } from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { app, auth } from "../firebase/firebase-config"
import { useNavigate } from "react-router-dom"

import { products } from "../data/data"

import PeopleIcon from '@mui/icons-material/People';
import KeyIcon from '@mui/icons-material/Key';

export default function SignUpMU() {

  var navigate = useNavigate()


  var data = {

    email: "",
    password: "",

    confirmPassword: ""


  }

  const [value, setValues] = useState(data)



  // const [code, setCode] = useState("")

  // const [message, setMessage] = useState("")




  function handleOnClick() {



    if (value.password == value.confirmPassword) {

      createUserWithEmailAndPassword(auth, value.email, value.password).then((response) => {
        console.log(response)

        navigate("/new")
  


      })
        .catch((error) => {
          console.log(error)

          // var message = error.message
          // var code = error.code

          // setCode(code)

        })

    }

    else {

      // var message = "Password unmatch!!!!"
      // console.log(message)
      // setMessage(message)
    }





  }

  function eHandler(event) {

    var mail = event.target.value
    setValues({ ...value, email: `${mail}` })


  }

  function pHandler(event) {

    var pwd = event.target.value
    setValues({ ...value, password: `${pwd}` })


  }

  function confirmPwd(event) {

    var cPwd = event.target.value
    setValues({ ...value, confirmPassword: `${cPwd}` })

  }






  return (



    <Box m={10} sx={{ marginLeft: "460px" , marginRight:"460px"}} >

      <div>
   

        <Box>

          <Card>

            <CardContent>

              <CardMedia component="img" height="140" src={products[1].images} />

              <Grid container  style={{ padding: "10px" }} direction="column" color="transparent">



                <TextField  variant="standard" style={{ width: "300px" }} label="Create UserName" margin="normal" type={"email"} onChange={eHandler}  />
                <TextField  variant="standard" label="Create PassWord" margin="normal" type={"password"} onChange={pHandler} />
                <TextField   variant="standard" label="Confirm PassWord" margin="normal" type={"password"} onChange={confirmPwd}  />
                <br />
                <Button size="small" onClick={handleOnClick}>Create</Button>

                {/* <Typography color="red">{code}</Typography>
                <Typography color="red">{message}</Typography> */}


              </Grid>
            </CardContent>

            
          </Card>

        </Box>
     
      </div>



    </Box>



  )
}


