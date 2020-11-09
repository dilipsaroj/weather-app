/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import DisplayFore from './DisplayForecast';


    function forecast(){

        const APIKEY = "6ecf2c5bf3e324eb7af31c748ae03141";
    
        const [form, setForm] = useState({
            city:"",
            country:"",
        });
    
        const [weather, setWeather] = useState([])
    
        async function weatherData(e){
            
            e.preventDefault();
            if(form.city == ""){
                alert("Add Data");
            }else{
                const data = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}, ${form.country}&appid=${APIKEY} `
                    )
                    .then((res) => res.json())
                    .then((data) => (data));
                    
                    setWeather(
                        {
                            data:data
                        }
                    )
            }
        }
        const handleChange = (e) => {
            let name = e.target.name;
            let value = e.target.value;
    
            if(name == "city"){
                setForm({...form, city:value});
            }
    
            if(name == "country"){
                setForm({...form, country:value});
            }
           
        };
    return (
        <div className="upcoming_forecast py-4">
        <span className="title"> <h3>Upcoming Forecast</h3></span>
                <br />
             <form className="py-4">
                    <input  type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input  type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button  className="getWeather" onClick = {e => weatherData(e)}>submit</button>
                </form>

                {
                    
                    weather.data != undefined ?
                    <div>
                        <DisplayFore data = {weather.data}/>
                    </div>
                    :null
                }
        </div>

    )

}

export default forecast;

