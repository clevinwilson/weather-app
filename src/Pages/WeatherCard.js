import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Weather from '../Components/WeatherCard/WeatherCard';
import WelcomCard from '../Components/WelcomeCard/WelcomeCard';
import useMediaQuery from '@mui/material/useMediaQuery';

function WeatherCardPage() {
  const screen = useMediaQuery('(min-width:623px)');
  return (
    <div style={{ backgroundImage: `url(${screen ? 'https://img.freepik.com/free-vector/people-walk-run-ride-bike-city-park-active-lifestyle-urban-environments-outdoor-leisure-vector-illustration-cartoon-style_165429-692.jpg?w=1060' : 'https://img.freepik.com/free-vector/people-walk-run-ride-bike-city-park-active-lifestyle-urban-environments-outdoor-leisure-vector-illustration-cartoon-style_165429-692.jpg'})`} }>
      <Navbar/>
      <WelcomCard/>
      <Weather/>
    </div>
  )
}

export default WeatherCardPage