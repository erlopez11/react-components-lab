import './WeatherForcast.css';

const WeatherForecast = (props) => {
    const {day, img, imgAlt, conditions, time} = props;
    return (
        <div className="weather">
            <h2>{day}</h2>
            <img src={img} alt={imgAlt}/>
            <p><span>Conditions: </span>{conditions}</p>
            <p><span>Time: </span>{time}</p>
        </div>
    );
}



export default WeatherForecast;