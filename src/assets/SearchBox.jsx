
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    
    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            const jsonResponse = await response.json();

            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min
                ,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,


            };
            console.log(result);
           
            return result;
        } catch (error) {
            alert("Failed to fetch weather data. Please check your internet connection.");
            console.error("Fetch error:", error);
        }
    };


    let handlechange = (evt) => {
        setCity(evt.target.value);
    }
    let handlesubmit = async(evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
     let info= await  getWeatherInfo();
     updateInfo(info);
    }
    return (
        <div className='SearchBox'>
           
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city}
                    onChange={handlechange} />
                <br /><br />
                <Button variant="contained" type='submit' color="success">
                    Search
                </Button>
            </form>
        </div>
    );
};