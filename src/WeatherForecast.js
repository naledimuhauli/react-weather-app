import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";


export default function WeatherForecast(props){
     
    function handelResponse(response){
        console.log(response.data);

    }

    let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handelResponse);

return (
    <div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="forecast-day">
                Thu
            </div>
            <WeatherIcon code="01d" size={30} />
            <div className="forecast-temperatures">
                <span className="forecast-temp-max">
                    19°
                </span>
                <span className="forecast-temp-min">
                    10°
                </span>
            </div>
        </div>
    </div>
    </div>
);
}