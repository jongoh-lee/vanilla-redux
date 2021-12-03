import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Detail from "../router/Detail"
import Home from "../router/Home"

function App(){
    return(
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/:id" element={<Detail/>}></Route>
        </Routes>
    </Router>
    )
}

export default App