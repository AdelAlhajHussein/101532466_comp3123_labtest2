import React from "react";

function WeatherCard({ data }) {
    if (!data || (data.cod !== 200 && data.cod !== "200")) {
        return <p>No weather data found.</p>;
    }

    const {
        name,
        sys,
        main,
        weather,
    } = data;

    const temperature = main.temp;
    const description = weather[0].description;
    const icon = weather[0].icon;
    const country = sys.country;

    return (
        <div className="weather-card">
            <h2>{name}, {country}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
            />
            <h3>{temperature}°C</h3>
            <p>{description}</p>

            <div className="extra-info">
                <p>Feels Like: {main.feels_like}°C</p>
                <p>Humidity: {main.humidity}%</p>
                <p>Pressure: {main.pressure} hPa</p>
            </div>
        </div>
    );
}

export default WeatherCard;
