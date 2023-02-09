import { useEffect, useState } from 'react';
import './App.css';
import CityButtons from './components/CityButtons';
import Forecast from './components/Forecast';
import History from './components/History';
import Inputs from './components/Inputs';
import TempAndOther from './components/TempAndOther';
import TimeLocation from './components/TimeLocation';
import getFormattedData from './services/ApiService';


function App() {

// use states
const [query, setQuery] = useState({q: "Berlin"});
const [units, setUnits] = useState('metric');
const [weatherData, setWeatherData] = useState(null);


// use effect

useEffect(() => {
  const fetchData = async () => {
    await getFormattedData({...query, units}).then((data) => {
      setWeatherData(data)
      console.log(data);
    });
    
  };
  
  fetchData();
}, [query, units])


// fetch("https://api.openweathermap.org/data/3.0/onecall?lat=54.6892&lon=25.2798&exclude=alert&appid=1b8bb04b1b223e343e9f05089e88251e").then(res => console.log(res.json()))

  return (
    
    <div className="mx-auto max-w-screen-md mt-4 py-2 px-24 bg-blue-400">
      <CityButtons />
      <Inputs />

      {weatherData
      && 
        <div>
          <TimeLocation weatherData={weatherData}/>
          <TempAndOther weatherData={weatherData}/>
          <Forecast />
          <History />
        </div>
      }

    </div>
  
  );
}

export default App;
