const apiKey = "a9898641566017ef04e6d284b80e1274";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".hum-perc").innerHTML = "Humidity: " + data.main.humidity+"%";
    document.querySelector(".desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".city").innerHTML = data.name;
    
    console.log(data);
}
checkWeather();