const zipForm = document.getElementById('zipForm');

zipForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const zipCode = event.path[0][0].value
    loadData(zipCode)
});

const connect2api = async (zipCode)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=1e8ce3b58ddc8f68504f887e2dc9c355&units=imperial`)
    const data = await res.json()
    console.log(data)
    return data
};


const loadData = async (zipCode)=>{
    const data = await connect2api(zipCode)
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
            <h5 class="card-title"><strong>City: ${myWeather.name}</strong></h5>
            <em>Forecast Description for: ${myWeather.weather[0].description}</em>
            <br>
            Current Temp: ${myWeather.main.temp.toPrecision(3)}°F
            <br>
            Min Temp: ${myWeather.main.temp_min.toPrecision(3)}°F
            <br>
            Max Temp: ${myWeather.main.temp_max.toPrecision(3)}°F
            <br>
            Feels like: ${myWeather.main.feels_like.toPrecision(3)}°F
            <br>
            Humidity: ${myWeather.main.humidity}%  
        </div>
    </div>
    `
    document.body.append(card)
};




