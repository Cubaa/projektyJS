const searchCityBtn = document.querySelector('.searchBtn')
const cityInput = document.querySelector('input')
let weatherArr = []
const lsKey = 'weather';
const APIkey = "5d4d2040d711a3d5ed6314165d802a26"
const weatherWrapper = document.querySelector('.weatherWrapper')
/*const weather =city
    city,
    temp,

}*/

const addCity = ()=>{
    console.log("klik")
    const city = cityInput.value
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        weatherArr.push({
            city: response.name,
            clouds: response.clouds.all,
            temp: Math.floor(response.main.temp - 273.15),
            humidity:response.main.humidity,
            main:response.weather[0].main,
            image: response.weather[0].main === 'thunderstorm' ? "https://www.freepik.com/free-photo/tornado-alley-severe-storm_1180017.htm#page=1&query=thunderstorm&position=6" : response.weather[0].main === 'Drizzle' ? "https://cdn.pixabay.com/photo/2019/10/30/21/49/path-4590633_960_720.jpg" : response.weather[0].main === 'Rain'? "https://pluviophile.net/wp-content/uploads/heavy-rain-umbrella-wallpaper.jpg" : response.weather[0].main === 'Snow' ? "https://cdn.pixabay.com/photo/2014/08/17/01/39/horse-419743_960_720.jpg" : response.weather[0].main === 'Mist' ? "https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_960_720.jpg" : response.weather[0].main === 'Clear' ? "https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg" : response.weather[0].main === 'Clouds' ? "https://cdn.pixabay.com/photo/2019/05/29/09/41/sky-4237062_960_720.jpg" : "https://cdn.pixabay.com/photo/2017/09/06/21/21/dog-2723082_960_720.jpg"
        })
       createWeatherUI(response)
        localStorage.setItem(lsKey, JSON.stringify(weatherArr));
    })
    .catch(error => console.log("Błąd: ", error, weatherArr));

}
searchCityBtn.addEventListener("click", addCity)
function createWeatherUI(response){
    const cardDiv = document.createElement('div')
        
     cardDiv.setAttribute("class", "col s3 m3")
          cardDiv.innerHTML = `
           <div class = "card">
              <div class = "card-image waves-effect waves-block waves-light">
                 <img class = "activator" src = ${
                     
                    response.weather[0].main === 'thunderstorm' ? "https://www.freepik.com/free-photo/tornado-alley-severe-storm_1180017.htm#page=1&query=thunderstorm&position=6" : response.weather[0].main === 'Drizzle' ? "https://cdn.pixabay.com/photo/2019/10/30/21/49/path-4590633_960_720.jpg" : response.weather[0].main === 'Rain'? "https://pluviophile.net/wp-content/uploads/heavy-rain-umbrella-wallpaper.jpg" : response.weather[0].main === 'Snow' ? "https://cdn.pixabay.com/photo/2014/08/17/01/39/horse-419743_960_720.jpg" : response.weather[0].main === 'Mist' ? "https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_960_720.jpg" : response.weather[0].main === 'Clear' ? "https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg" : response.weather[0].main === 'Clouds' ? "https://cdn.pixabay.com/photo/2019/05/29/09/41/sky-4237062_960_720.jpg" : "https://cdn.pixabay.com/photo/2017/09/06/21/21/dog-2723082_960_720.jpg" }>      
                 <p class="center" style="font-size: 20px;">${response.name}</p>          
              </div>
              
              <div class = "card-content activator">             
                 <p>Kliknij w zdjęcie, by dowiedzieć się więcej</p>
              </div>
              
              
              <div class = "card-reveal">
                 <span class = "card-title grey-text text-darken-4 style="font-size: 20px;">${response.name}
                    <i class = "material-icons right">close</i></span>
                 <p>Clouds: ${response.clouds.all}%</p>
                 <p>Temp: ${Math.floor(response.main.temp - 273.15)}°C</p>
                 <p>Humidity: ${response.main.humidity}%</p>
              </div>
           </div>
        
     `
     weatherWrapper.appendChild(cardDiv)
}

function addDataFromLocalStorage(){
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(lsKey));
    
    const mappedWeather = dataFromLocalStorage.map(weather => {
        return weather;
    });
    console.log(mappedWeather)
    weatherArr = mappedWeather
    mappedWeather.forEach((data)=>{
        const cardDiv = document.createElement('div')
 cardDiv.setAttribute("class", "col s3 m3")
      
      cardDiv.innerHTML = `
        
       <div class = "card">
          <div class = "card-image waves-effect waves-block waves-light">
             <img class = "activator" src = ${data.image}>      
             <p class="center" style="font-size: 20px;">${data.city}</p>          
          </div>
          
          <div class = "card-content activator">             
             <p>Kliknij w zdjęcie, by dowiedzieć się więcej</p>
          </div>
          
          
          <div class = "card-reveal">
             <span class = "card-title grey-text text-darken-4 style="font-size: 20px;">${data.city}
                <i class = "material-icons right">close</i></span>
                <p>Clouds: ${data.clouds}%</p>
                <p>Temp: ${data.temp}°C</p>
                <p>Humidity: ${data.humidity}%</p>
          </div>
          
       </div>
    
 `
 weatherWrapper.appendChild(cardDiv)
    })

}
addDataFromLocalStorage()