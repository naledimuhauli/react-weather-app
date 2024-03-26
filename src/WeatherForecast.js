import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecast(){
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