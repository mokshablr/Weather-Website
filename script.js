const apiKey = "bcb5b5ee884b1b5ce803e26025323053";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function checkPrefix( weatherId,  pre)
{
    var s1 = weatherId.toString();
    var s2 = pre.toString();
     
    var n1 = s1.length;
    var n2 = s2.length;

    for(var i = 0; i < n2; i++){
        if (s1[i] != s2[i]){
            return false;
        }
    }
    return true;
}

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();

    var weatherId=data.weather[0].id;
    if(checkPrefix(weatherId, 2)){
        document.getElementById("weather-icon").src = "./weather-icons/cloud-lightning.svg";
    }
    else if(checkPrefix(weatherId, 3)){
        document.getElementById("weather-icon").src = "./weather-icons/cloud-rain.svg";
    }
    else if(checkPrefix(weatherId, 5)){
        document.getElementById("weather-icon").src = "./weather-icons/cloud-rain.svg";
    }
    else if(checkPrefix(weatherId, 6)){
        document.getElementById("weather-icon").src = "./weather-icons/cloud-snow.svg";
    }
    else if(checkPrefix(weatherId, 7)){
        document.getElementById("weather-icon").src = "./weather-icons/cloud-fog.svg";
    }
    else if(checkPrefix(weatherId, 800)){
        document.getElementById("weather-icon").src = "./weather-icons/sun.svg";
    }
    else if(checkPrefix(weatherId, 80)){
        document.getElementById("weather-icon").src = "./weather-icons/cloud-sun.svg";
    }
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = "Humidity: \n" + data.main.humidity+"%";
    document.querySelector(".desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    document.querySelector(".wind").innerHTML = "Wind: "+data.wind.speed+" km/h";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".city").innerHTML = data.name;
    
    console.log(data);
}

checkWeather("Bangalore");
