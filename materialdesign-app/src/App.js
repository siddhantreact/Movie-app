
import NavbarMu from "../src/MaterialDesign/NavbarMu"
import RoutesMu from "../src/RoutesMu"
import "../src/index.css"
import { createContext, useState } from "react"

import { products } from "./data/data"



const State = createContext()



export default function App() {


 
  const [watchList, setWatchList] = useState("")
  const [list, setList] = useState(products)

  // const [videoUrl ,setVideoUrl] = useState("")



 {console.log(watchList)} 

  return (

    <div >

      <State.Provider value={{  watchList, setWatchList ,list ,setList }}>

        <NavbarMu />






        <RoutesMu />





      </State.Provider>



    </div>
  )
}



export { State }