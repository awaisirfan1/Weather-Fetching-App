function WeatherCard({ data }) {
    return (

    <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{data.name}</h2>
        <p className="text-lg">🌡 Temp: {data.main.temp} °C</p>
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>🌬 Wind: {data.wind.speed} m/s</p>
        <p>📋 {data.weather[0].description}</p>
    </div>   
      
    );
  }
  
  export default WeatherCard;
  