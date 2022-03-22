
import './App.css';
import AddPlace from './Components/AddPlace/AddPlace';
import Card from './Components/WeatherCard/WeatherCard';
import { withStyles } from "@material-ui/core/styles";
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='app'  >
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/'  element={<Card></Card>} />

          <Route path='/addplace' element={<AddPlace></AddPlace>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
