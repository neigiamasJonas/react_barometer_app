import './App.css';
import CityButtons from './components/CityButtons';
import Forecast from './components/Forecast';
import History from './components/History';
import Inputs from './components/Inputs';
import TempAndOther from './components/TempAndOther';
import TimeLocation from './components/TimeLocation';
import getFormattedData from './services/ApiService';


function App() {

const fetchData = async () => {
  const data = await getFormattedData({q: "Vilnius"});
  console.log(data);
};

fetchData();


  return (
    
    <div className="mx-auto max-w-screen-md mt-4 py-2 px-24 bg-blue-400">
      <CityButtons />
      <Inputs />
      <TimeLocation />
      <TempAndOther />
      <Forecast />
      <History />

    </div>
  
  );
}

export default App;
