import React, { useState , useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() =>{
        setLoaded(false);
    } , [props.coord]);
     
    function handelResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
        console.log(response.data);

    }

    if(loaded){
        return (
            <div className="WeatherForecast mt-3 mb-3">
            <div className="row">
                {forecast.map(function (forecast, index){
                  if(index < 5){
                    return (
                        <div className="col" key={index}>
                    <WeatherForecastDay data={forecast} />
                </div>
                    );
                  } else{
                    return null;
                  }
                })}
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