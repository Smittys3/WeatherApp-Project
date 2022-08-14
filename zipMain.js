const zipForm = document.getElementById('zipForm');

zipForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const zipCode = event.path[0][0].value
    loadData(zipCode)
});

const weatherApi = async (zipCode)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=1e8ce3b58ddc8f68504f887e2dc9c355&units=imperial`)
    const data = await res.json()
    console.log(data)
    return data
};


const loadData = async (zipCode)=>{
    const data = await weatherApi(zipCode)
    const zipWeather = [data]
    zipWeather.map(getDataWeather)
};


const getDataWeather = async (zipWeather) => {
    const card = document.createElement('div')
    // card.innerHTML = myWeather.main.temp
    // card.innerHTML = myWeather.main.temp_max
    // card.innerHTML = myWeather.main.temp_min
    // card.innerHTML = myWeather.main.humidity
    // card.innerHTML = myWeather.weather[0].main
    // card.innerHTML = myWeather.main.humidity
    card.innerHTML = 
    `
    <main class="card">
        <div style="">
            <div class="card-body">
                <h5 class="card-title"><strong>City: ${zipWeather.name}</strong></h5>
                <em>Forecast Description for: ${zipWeather.weather[0].description}</em>
                <br>
                Current Temp: ${zipWeather.main.temp.toPrecision(3)}°F
                <br>
                Min Temp: ${zipWeather.main.temp_min.toPrecision(3)}°F
                <br>
                Max Temp: ${zipWeather.main.temp_max.toPrecision(3)}°F
                <br>
                Feels like: ${zipWeather.main.feels_like.toPrecision(3)}°F
                <br>
                Humidity: ${zipWeather.main.humidity}%  
            </div>
        </div>
    </main>
    `
    document.body.append(card)

};

