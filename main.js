"use strict"

let weatherRespone = "Please wait "
const weatherDiv = document.querySelector('#weather')
weatherDiv.innerText= weatherRespone
const key = '9dfc32fdbcb5cb44a7ded98168f6fe40'
function getWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chios,gr&lang=el&units=metric&appid=${key}`,
    {method: 'GET'}
    )
    .then(response => response.json())
    .then(json=>{weatherDiv.innerHTML=`${json.weather[0].description}  (${json.main.temp}) <sup>o</sup>C`})
    .then(setWeatherText())
    .catch(error=>console.error('error',error))
}


function setWeatherText(){
    weatherDiv.innerText = weatherRespone

}
getWeather()