import './WeatherForcast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = ({forecasts}) => {
    return (
        <>
          {forecasts.map((forecast, index) => (
            <div className='weather'>
                <WeatherIcon
                    key={index}
                    img={forecast.img}
                    text={forecast.imgAlt}
                />
                <WeatherData
                    key={index}
                    day={forecast.day}
                    conditions={forecast.conditions}
                    time={forecast.time}
                />
            </div>
          ))}
        </>
    );
}



export default WeatherForecast;