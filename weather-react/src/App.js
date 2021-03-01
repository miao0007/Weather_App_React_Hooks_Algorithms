import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';


function App() {
  const [weather,setWeather] = useState([])
  const API_KEY = 'ee7c3298c2fab93deaad71567a82a537';

  async function fetchData(e){
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault();
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${city},${country}&APPID=${API_KEY}`)
    .then(res =>res.json())
    .then(data =>data)
    if(city && country) {
      setWeather({
        data: apiData,
        city:apiData.city,
        country: apiData.country,
        description:apiData.weather[0].description,
        temperature:apiData.main.temp,
        error:""
      }
      )
    } else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error: 'Please Type A City And Country'
      })
    }
    

  }
  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
      city = {weather.city}
      country = {weather.country}
      description = {weather.description}
      temperature = {weather.temperature}
      error = {weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
