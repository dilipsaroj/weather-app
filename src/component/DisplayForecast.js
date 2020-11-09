
import React from 'react';

function DisplayForecast(props){
    const {data} = props;
   console.log(data, 5);
   let forecastData = [];
   forecastData = data.list;

    // let dataList = 

    // eslint-disable-next-line no-useless-concat
    // const iconurl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x" + ".png"
    const iconurl = "http://openweathermap.org/img/wn/";
    return (
            <div className="">
                <h3> 5 Days forecast data for {data.city.name} </h3>

                <ul>
                    <li className="row py-2">
                        <div className="col"><h5>Day</h5> </div>
                        <div className="col"><h5>Temperature</h5></div>
                        <div className="col"><h5>Humidity</h5></div>
                    </li>
                   {
                       forecastData.map((item, i) => (

                       <li className="row" key={item + i}>
                           <div className="col date">
                              For time {item.dt_txt}
                           </div>

                           <div className="col wheate-temp">
                           <img src={`${iconurl}${item.weather[0].icon}@2x.png`} className="weather-icon" alt =""/>
                             {Math.floor(item.main.temp - 273.15)} <sup>o</sup>
                           </div>

                           <div className="col wheate-status">

                               {item.main.humidity} %
                               
                                
                           </div>


                           
                        </li>
                       
                       )
                       
                    
                       )}
                </ul>
            </div>
        )
}

export default DisplayForecast;