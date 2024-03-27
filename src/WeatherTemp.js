import React from "react";

export default function WeatherTemp(props){
    return(
        <div className="WeatherTemp ml-3">
<span className="temperature">
                {Math.round(props.celsius)}
                 </span>
             <span className="unit">°C
             </span>
        </div>
    )

}