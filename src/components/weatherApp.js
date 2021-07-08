import { useState, useEffect } from "react";

const WeatherApp = () => {
    //declare stste's 'data'
    const [data, setData] = useState("");
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [department, setDepartment] = useState("");
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState("");
    const [gradosC, setGradosC] = useState("");
    const [gradosF, setGradosF] = useState("");
    const [changeCelsius, setChangeCelsius] = useState(true);
    
    //declare stste's 'location'
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");

    //request to Api... caution with trutty
useEffect (()=> {
   if(latitud && longitud ){
    const request = async () => {
        const API_KEY = '0b36cd09effe4f34995215908210707'
        // let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURI(latitud)},${encodeURI(longitud)}&aqi=no`;
        let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURI(latitud)},${encodeURI(longitud)}&aqi=no`;
        const response = await fetch(url).then(res => res.json())
        setData(response) 
    }
    request()
   }
}, [latitud, longitud])

    //get and set my location 
useEffect(() => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitud(position.coords.latitude)
            setLongitud(position.coords.longitude)
      });
    }else {
        alert('Geolocation is not available');
    }
}, [])

    // get and set data
useEffect(()=> {
    if(data) {
            setCityName(data.location.name);
            setCountry(data.location.country);
            setRegion(data.location.tz_id);
            setDepartment(data.location.region);
            setIcon(data.current.condition.icon);
            setDescription(data.current.condition.text);
            setGradosC(data.current.temp_c);
            setGradosF(data.current.temp_f); 
    }
},[data])

    //interface
    return  <div className="container">
                <p>Time zone: {region}</p>
                <h5>{country}, {department}</h5>
                <h5 >{cityName}</h5>

            <div className="container-two">
                <div className="position">
                    <div>
                        <img src={icon} alt="" />
                        <h5>{changeCelsius ? gradosC : gradosF} {changeCelsius ? "C" : "F"}</h5>
                    </div>
                    <div>
                        <p className="margin-top">"{description}"</p>
                    </div>
                </div>
            </div>
            <button className="btn" onClick={() => setChangeCelsius(!changeCelsius)}>Degrees F/C</button><br />
        </div>
}
export default WeatherApp;