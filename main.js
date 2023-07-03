const apiKey = 'c5a9687e31c94d5db0771544230307';

const apiUrl = 'http://api.weatherapi.com/v1/current.json?&q=';

const searchInput =document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function weatherData(city) {
  const response = await fetch(apiUrl+ city + '&key=' + apiKey);
  const data = await response.json();
  console.log(data);
  
  document.querySelector('.weather').style.display='block';
  
  document.querySelector('.city').innerHTML= data.location.name;
  document.querySelector('.text').innerHTML= data.current.condition.text;
  document.querySelector('.humidity').innerHTML= data.current.humidity + '%';
  document.querySelector('.wind').innerHTML= data.current.wind_kph + 'km/h';
  document.querySelector('.temp').innerHTML= data.current.temp_c + '°c' ;
  document.getElementById('icon').src=data.current.condition.icon;
  
}

document.getElementById("year").innerHTML= new Date().getFullYear();;