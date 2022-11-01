import React from 'react'
import Carousel from './component/Carousel'
import Destinations from './component/Destinations'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Search from './component/Search'
import Select from './component/Select'
import Video from './component/Video'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Video></Video>
    <Destinations></Destinations>
    <Search></Search>
    <Select></Select>
    <Carousel></Carousel>
    <Footer></Footer>
    </div>
  )
}

export default App
