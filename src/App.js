import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "a099d304c2ce010154a9de748353a77f";

  // Fetch weather data for a given city
  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
      <div className="App">
        <h1>Weather App</h1>

        {/* Search bar (user can type a city) */}
        <SearchBar onSearch={fetchWeather} />

        {/* Weather card (only shows when data exists) */}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
  );
}

export default App;
