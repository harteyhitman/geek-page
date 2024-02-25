import React from 'react'
import Navbar from './sections/navbar'
import EmpoweringMinds from './sections/empowering-minds'
import AboutUs from './sections/about-us'
import Messagefromceo from './sections/message-from-ceo'
import HowMission from './sections/how-mission'
import Footer from './sections/footer'

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <EmpoweringMinds />
        <AboutUs />
        <Messagefromceo />
        <HowMission />
        <Footer />
    </div>
  )
}

export default MainPage