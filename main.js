const cityForm = document.getElementById('cityForm');


cityForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const cityName = event.path[0][0].value
    loadData(cityName)
});


const connect2api = async (cityName)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1e8ce3b58ddc8f68504f887e2dc9c355&units=imperial`)
    const data = await res.json()
    console.log(data)
    return data
};


const loadData = async (cityName)=>{
    const data = await connect2api(cityName)
    const myWeather = [data]
    myWeather.map(getWeather)
};

const getWeather = async (myWeather) => {
    const card = document.createElement('div')
    // card.innerHTML = myWeather.main.temp
    // card.innerHTML = myWeather.main.temp_max
    // card.innerHTML = myWeather.main.temp_min
    // card.innerHTML = myWeather.main.humidity
    // card.innerHTML = myWeather.weather[0].main
    // card.innerHTML = myWeather.main.humidity
    card.innerHTML =
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Current Temp ${myWeather.main.temp}</h5>
        
        Min Temp: ${myWeather.main.temp_min}
        Max Temp: ${myWeather.main.temp_max}
        Humidity: ${myWeather.main.humidity}
        
    </div>
  </div>
    `
    document.body.append(card)
};
