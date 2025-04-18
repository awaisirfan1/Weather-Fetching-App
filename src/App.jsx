import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // replace with your real key

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 flex flex-col items-center justify-center font-sans p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">🌤 Weather App</h1>
  
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-3 w-64 rounded-md shadow border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 bg-amber-50"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md shadow"
        >
          Get Weather
        </button>
      </div>
  
      {error && <p className="text-red-600 text-lg">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
  
  
}

export default App;
