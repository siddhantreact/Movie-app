import { Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import "../MaterialDesign/LandingMu.css"

function LandingMu() {

  const navigate = useNavigate()

  return (
    <div className='landing_container'  >

      <video className='landing_video_container' autoPlay muted loop style={{ width: "100vw" }}>

        <source src={"Video/1.mp4"} type="video/mp4" />

      </video>



      <div className='landing_child_container' >

        <Typography>Not a member yet? click to continue</Typography>

        <Button color='primary' variant='outlined' onClick={() => { navigate("/login") }}>
          continue
        </Button>


      </div>


      <footer>

        <Typography>copyright@2023</Typography>

      </footer>

    </div>
  )
}

export default LandingMu
