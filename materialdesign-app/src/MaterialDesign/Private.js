import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import {auth} from "../firebase/firebase-config"
import LoginMu from './LoginMu'

function Private() {

  const navigate = useNavigate()

 const [user ,setUser] = useState("")




  useEffect(()=>{

    auth.onAuthStateChanged((user) => {
      if (user) {
           
          setUser(user)
    
      }
    
      else {
          console.log("please login")
      }
    })


  },[user])

  


 




  return (
    <div className='main_container'>

    {(!user)?  <LoginMu/>   :  <Outlet/>   }

    </div>
  )
}

export default Private
