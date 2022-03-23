
import './App.css';
import Card from './Components/WeatherCard/WeatherCard';
import { withStyles } from "@material-ui/core/styles";
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import AddPlace from "./Pages/AddPlace";
import WeatherCard from './Pages/WeatherCard';
function App() {
  return (
    <div className='app'  >
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/'  element={<WeatherCard/>} />

          <Route path='/addplace' element={<AddPlace></AddPlace>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
