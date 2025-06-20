
import SearchBox from "../assets/SearchBox"
import InfoBox from "../assets/InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo]=useState({
        city:"Nagpur",
          temp: 32.52,
                tempMin:32.52,
                
                tempMax: 32.52,
                humidity: 46,
                feelsLike:32.34,
                weather: "broken clouds",
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2 >
                Weather App </h2>
                     <SearchBox updateInfo={updateInfo}></SearchBox>
     <InfoBox info={weatherInfo}></InfoBox >
            
        </div>
    )
}