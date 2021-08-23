import "./App.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchWeatherInfo();
  }, []);

  const fetchWeatherInfo = (e) => {
    e?.preventDefault();
  };

  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/climate/month",
    params: {
      q: inputRef.current?.value || "London",
      units: "metric",
    },

    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "b1b3051765msh91cdea31d8cdde3p1fd01fjsn9e846f5e9525",
    },
  };

  const response = axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      setWeatherInfo(response.data)
    })
    .catch((error) => {
      alert(error.message);
    });

  return (
    <div className="App">
      <h1>Our wetaher app</h1>
      <form>
        <input ref={inputRef} type="text" placeholder="Type the city" />
        <button onClick={fetchWeatherInfo} type="submit">
          Show me the weather
        </button>
      </form>

      <h2>{weatherInfo?.name}</h2>
      <h3>{weatherInfo?.sys?.sunrise}</h3>
    </div>
  );
}

export default App;
