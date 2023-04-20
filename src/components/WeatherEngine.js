import { useEffect, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import WeatherCard from './WeatherCard/Component';
const WeatherEngine = ({location}) => {

 
  const [query,setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const [weather,setWeather] = useState({
    temp: null,
    city:null,
    condition:null,
    country:null
  });
 // const [temp, setTemp] = useState("");
  //const [condition, setCondition] = useState("");
  //const [country, setCountry] = useState("");

  
const getWeather = async(q)=>{
    setQuery('');
    setLoading(true);
    try{
        const apiRes= await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=bc39636a0a99b74a2033af4ab407ea8b`
          );
        
          const resJSON = await apiRes.json();
          setWeather({
            temp: resJSON.main.temp,
            city:resJSON.name,
            condition:resJSON.weather[0].main,
            country:resJSON.sys.country
          });
    }catch (error){
        setError(true);
    }
  setLoading(false);

}
//function to handle search query from the user
     const handleSearch = e =>{
      e.preventDefault();
      getWeather(query);
    };
  

    useEffect(()=>{
      getWeather(location);
      
    },[location])

  return (
    <div> 
      {!loading && !error ? (<div>
        <WeatherCard 
            temp={weather.temp} 
            condition={weather.condition} 
            country={weather.country} 
            city= {weather.city}
            getWeather = {getWeather}
            />
      

      
      </div>):loading?(<div style={{display: 'flex', width:'200px', height:'240px',
          justifyContent:'center', alignItems:'center',  }}>
        <PulseLoader size={20}/>
      </div>):!loading && error?(
      <div style={{color:"black"}}>An error occurred<br />
      <button onClick={()=>setError(false)}>Reset</button></div>):null
    }
    </div>
  );
}

export default WeatherEngine;
