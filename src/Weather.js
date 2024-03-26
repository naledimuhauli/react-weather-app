import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity)

function handelResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
}

function search(){
    const apiKey= "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
}

function handelSubmit(event){
    event.preventDefault();
   search();
}

function handelChange(event){
    setCity(event.target.value);
}

if(weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handelSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="text"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handelChange} />
                </div>
                <div className="col-3">
                <input type="submit"
                value="Search"
                className="btn btn-primary" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast />
</div>      
    );
}else{
search();
    return "Loading.....";
}
}