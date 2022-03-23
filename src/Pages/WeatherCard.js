import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Weather from '../Components/WeatherCard/WeatherCard';
import WelcomCard from '../Components/WelcomeCard/WelcomeCard';
function WeatherCardPage() {
  return (
    <div>
      <Navbar/>
      <WelcomCard/>
      <Weather/>
    </div>
  )
}

export default WeatherCardPage