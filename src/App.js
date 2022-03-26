
import './App.css';
import Card from './Components/WeatherCard/WeatherCard';
import { withStyles } from "@material-ui/core/styles";
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import AddPlace from "./Pages/AddPlace";
import WeatherCard from './Pages/WeatherCard';
import { FirebaseContext } from './store/Context';
import { useContext } from 'react';
function App() {
  const { firebase } = useContext(FirebaseContext)
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
