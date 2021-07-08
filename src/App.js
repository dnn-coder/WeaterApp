import './App.css';
import WeatherApp from './components/weatherApp'
import Clock from './components/clock'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weater-box">
        <h1>Weather App</h1>
        <WeatherApp />
        <Clock />
        </div>
      </header>
    </div>
  );
}

export default App;
