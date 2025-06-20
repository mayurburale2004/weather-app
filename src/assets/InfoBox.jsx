import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./InfoBox.css";

export  default function InfoBox({info}){
  const INIT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfPxJsBJ401GCYPyTHkb8JOWKXkFnvaezCw&s";
  const Hot_URl="https://360.org/wp-content/uploads/2011/09/sand-dunes-in-california-scaled.jpg";
  const COLD_URL="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2022/11/cold-weather-photography-7.jpg?resize=1500%2C1000&ssl=1";
  const RAIN_URl="https://static.vecteezy.com/system/resources/thumbnails/042/146/565/small/ai-generated-beautiful-rain-day-view-photo.jpg";

    return(
        <div className="InfoBox">
          
            <div className='cardcon'>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URl : info.temp > 15 ? Hot_URl : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon />: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' } }component={"span"}>
       <p>Temperature = {info.temp}&deg;C</p>
       <p>Humidity = {info.humidity}</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       
       <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    );
}
