
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/WeatherCard';
function App() {
  return (
    <div className='app'  >
      <h2 className='section-title'>Weather</h2>
      <Card />
    </div>
  );
}

export default App;
