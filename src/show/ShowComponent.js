import { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CountryContext from "../context/CountryContext";
const appid = "1c18b5686356be4aa1fb53b1e64a6fa3";

let daily = [];
function FetchComponent() {
  const { country, setCountry } = useContext(CountryContext);
  const { currentContryid, setCurrentCountryid } = useContext(CountryContext);
  const { currentContry, setCurrentCountry } = useContext(CountryContext);
  const [dailyweather, setDailyWeather] = useState([]);
  const [dayIndex, setDayIndex] = useState(0);
  
  useEffect(() => {
    console.log(JSON.stringify(currentContry))
      axios(
        `https://api.openweathermap.org/data/2.5/weather?id=${currentContryid.country}&lang=tr&appid=${appid}`
      )
        .then((res) => setCurrentCountry(res.data))
        .then(() => {
          axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${currentContry.coord.lat}&lon=${currentContry.coord.lon}&exclude=alerts&lang=tr&units=metric&appid=${appid}`
          ).then((res) => setDailyWeather(res.data));
        });
    
  }, [currentContryid]);
  let daily = [dailyweather.daily];
  //console.log(dailyweather.daily);
  let day_index = new Date().getDay();
  let Day_turk = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let [iconset, setIconSet] = useState({
    "orta şiddetli yağmur": "https://cdn-icons-png.flaticon.com/512/1163/1163626.png",
    "parçalı bulutlu": "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    "hafif yağmur": "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    "açık": "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    "kapalı": "https://cdn-icons-png.flaticon.com/512/1163/1163634.png",
    "parçalı az bulutlu":"https://cdn-icons-png.flaticon.com/512/3208/3208752.png",
    "az bulutlu":"https://cdn-icons-png.flaticon.com/512/4064/4064276.png",
    "şiddetli yağmur":"https://cdn-icons-png.flaticon.com/512/1146/1146860.png",
  });

  return (
    <div>
      {/* <p>{JSON.stringify(currentContryid)}</p> */}
      {/* <p>{JSON.stringify(dailyweather.daily)}</p> */}
      <div className="card-group m-2">
        {dailyweather.daily &&
          dailyweather.daily.map((q, index) => (
            <div key={index} className={`card ${index == 0 ? "bg-light":"border-0" }`} data={dayIndex}>
              <div className="card-body">
              <p style={{display:"none"}}>
                {(day_index + index)%7}
              </p>
                <h5 className="card-title text-center">{Day_turk[(day_index + index)%7]}</h5>
                <p className="card-text text-center">
                  {q.weather[0].description === "parçalı bulutlu"
                    ? <img src={iconset["parçalı bulutlu"]} width="50" height="50"/>
                    : null}
                  {q.weather[0].description === "kapalı"
                    ? <img src={iconset["kapalı"]} width="50" height="50"/>
                    : null}
                  {q.weather[0].description === "hafif yağmur"
                    ? <img src={iconset["hafif yağmur"]} width="50" height="50"/>
                    : null}
                  {q.weather[0].description === "açık"
                    ? <img src={iconset["açık"]} width="50" height="50"/>
                    : null}
                  {q.weather[0].description === "parçalı az bulutlu"
                    ? <img src={iconset["parçalı az bulutlu"]} width="50" height="50"/>
                    : null}  
                  {q.weather[0].description === "orta şiddetli yağmur"
                    ? <img src={iconset["orta şiddetli yağmur"]} width="50" height="50"/>
                    : null} 
                  {q.weather[0].description === "az bulutlu"
                    ? <img src={iconset["az bulutlu"]} width="50" height="50"/>
                    : null} 
                  {q.weather[0].description === "şiddetli yağmur"
                    ? <img src={iconset["şiddetli yağmur"]} width="50" height="50"/>
                    : null} 
                </p>
                <p className="card-text text-center">
                  
                    {q.weather[0].description}
                  
                </p>
                <p className="card-text text-center">
                  <small className="text-muted "> 
                  Max | Min
                  <br/>
                  {JSON.stringify(q.temp.max)} | {JSON.stringify(q.temp.min)}
                  </small> </p>
                
                <p className="card-text text-center">
                  {/* {console.log(JSON.stringify(q))} */}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FetchComponent;
