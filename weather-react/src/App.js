import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';


function App() {
  const [weather,setWeather] = useState([])
  const API_KEY = 'ee7c3298c2fab93deaad71567a82a537';

  async function fetchData(e){
    e.preventDefault();
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`)
    .then(res =>res.json())
    .then(data =>data)
    setWeather({
      data: apiData
    })

  }
  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
