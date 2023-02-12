import React, { useContext } from 'react'
import { State } from '../App'

import "../MaterialDesign/VideoPlayer.css"

function VideoPlayer() {

  //  const {videoUrl , setVideoUrl} = useContext(State)  


  return (
    
    <div className='video_player_container'>
      
        <video  width={"1000px"} height={"600px"} controls >
 
       <source  src={"Video/tra.mp4"}   type="video/mp4"   />

        </video>

    </div>
  )
}

export default VideoPlayer
