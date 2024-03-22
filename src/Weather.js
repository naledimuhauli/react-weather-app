import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
           <h1>New York</h1>
           <ul>
            <li>Friday 20:59</li>
            <li>Clear sky</li>
           </ul>
           <div className="row">
            <div className="col-6">
           <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
             alt="Clear sky" /> 5°C
             </div>
             <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 15%
                    </li>
                    <li>
                        Humidity: 32%
                    </li>
                    <li>
                        Wind: 13km/h
                    </li>
                </ul>
             </div>
             </div>
</div>
          
    );
}