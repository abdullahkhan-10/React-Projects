import React, { useEffect, useState, useRef } from "react";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const inputRef = useRef();

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const searchData = async (city) => {

    // if some don't enter value to input field show alert
    if (city === "") {
      alert("Enter City Name");
      return; // return mean stop the function here.
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      const respone = await fetch(url);
      const information = await respone.json();

      // if some one enter wron city name 
      if (!respone.ok) {
        alert(information.message)
        return;
      }

      console.log(information);
      const icons = allIcons[information.weather[0].icon || clear_icon];
      // we will set the information using object
      setWeatherData({
        humidity: information.main.humidity,
        windSpeed: information.wind.speed,
        temperature: Math.floor(information.main.temp), // to get only number from left side of decimal.
        cityName: information.name,
        icon: icons,
      });
    } catch (error) {
      console.error("Error in fetching data");
    }
  };

  useEffect(() => {
    searchData("London");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        {/* mean pass the current value of inputfield to the function as argument  */}
        <img
          src={search_icon}
          alt="Error"
          onClick={() => searchData(inputRef.current.value)}
        />
      </div>

      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="image" className="weather-icon" />
          <p className="temperature">{weatherData.temperature} °C</p>
          <p className="location">{weatherData.cityName}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) 
      : ("No data found")
    }
    </div>
  );
};

export default Weather;
