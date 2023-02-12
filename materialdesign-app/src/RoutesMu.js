import { Routes, Route } from "react-router-dom"
import NewMoviesMu from "./MaterialDesign/NewMoviesMu"
import LoginMu from "./MaterialDesign/LoginMu"
import Error from "./MaterialDesign/Error"
import SignUpMU from "./MaterialDesign/SignUpMu"
import HomeMu from "./MaterialDesign/HomeMu"
import ContactMu from "./MaterialDesign/ContactMu"
import WatchList from "./MaterialDesign/WatchListMu"
import LandingMu from "./MaterialDesign/LandingMu"
import Private from "../src/MaterialDesign/Private"
import { lazy } from "react"
import { Suspense } from "react"
import VideoPlayer from "./MaterialDesign/VideoPlayer"


 const NEW = lazy(() => { return import("../src/MaterialDesign/NewMoviesMu") })



export default function RoutesMu() {

    return (


        <Suspense fallback={<h3>Loading........</h3>} >
            <Routes>




                <Route exact path="*" element={<Error />}/>
                <Route exact path="/movies" element={<HomeMu />}/>
                <Route exact path="/login" element={<LoginMu />}/>
                <Route excat path="/signup" element={<SignUpMU />} />
                <Route exact path="/" element={<LandingMu />} />
               
                <Route exact path="/contact" element={<ContactMu />} />
              
                <Route exact path="/play" element={<VideoPlayer />} />
                <Route exact path="/new" element={<NEW/>} />
                <Route exact path="/watchlist" element={<WatchList />} />





                <Route element={<Private />} >

              
                </Route>



            </Routes>

        </Suspense>

    )
}