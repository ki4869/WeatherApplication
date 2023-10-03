const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cbec6b1053mshd9961c33370c83ep1ee3eajsn0bf674693dcc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather =(city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {

        cityname.innerHTML=city

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML= response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset






        console.log(response)
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value);

})

getWeather("Delhi");

// async function fetchData() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData();