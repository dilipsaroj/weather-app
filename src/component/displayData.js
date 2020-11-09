
import React from 'react';

 function DisplayData(props){
     const {data} = props;
    console.log(data, 5);
     // eslint-disable-next-line no-useless-concat
     const iconurl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x" + ".png"
     return (
        <div className="display_data">
            <div className="card_main">
                <span className="each_card">
                   <h4>{data.name}, {data.sys.country}</h4>
                </span>
                <span className="subtitle">
                    Updated for {new Date().toLocaleTimeString()}
                </span>
              
                <h1>
                    {Math.floor(data.main.temp - 273.15)} {" "}
                    <sup>o</sup>
                </h1>
                <span className="weather_main">{data.weather[0].main}</span>
                <img src={iconurl} className="weather-icon" alt =""/>
                
               
                
            </div>

                <div className="listing"> 
                <ul className="details ">
                    <li >
                        <ul >
                            <li className="left  ">
                                <h4>High/Low</h4>
                            </li>
                            <li className="right ">
                            {Math.floor(data.main.temp_max - 273.15)} <sup>o</sup> /{" "}
                            {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>
                            </li>
                        </ul>

                        <ul >
                            <li className="left  ">
                                <h4>Lat/Long</h4>
                            </li>
                            <li className="right ">
                                {data.coord.lat} /{" "}
                                {data.coord.lon}
                            </li>
                        </ul>

                        <ul >
                            <li className="left  ">
                                <h4>Humidity</h4>
                            </li>
                            <li className="right ">
                                {data.main.humidity} %
                            </li>
                        </ul>

                        <ul >
                            <li className="left  ">
                                <h4>Sunrise/Sunset</h4>
                            </li>
                            <li className="right ">
                                {new Date(data.sys.sunrise *1000).toLocaleTimeString()} /{" "}
                                {new Date(data.sys.sunset *1000).toLocaleTimeString()}
                            </li>
                        </ul>

                        
                    </li>
                </ul>
                </div>
        </div>
        
    )
}
export default DisplayData;