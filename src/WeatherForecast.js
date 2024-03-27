import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
     
    function handelResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
        console.log(response.data);

    }

    if(loaded){
        return (
            <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
            </div>
        );
    } else {
        
    let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handelResponse);

     return null;
    }
}