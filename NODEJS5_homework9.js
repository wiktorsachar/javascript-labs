/*Dodajmy do naszej aplikacji z zadania 7 pobieranie pogody dla naszego użytkownika (z odpowiedzi
weźmy main.temp i wyświetlmy na ekranie). Zadanie analogiczne jak w poprzednim laboratorium z
wykorzystaniem składni async/await.
Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?
appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}*/

const axios = require('axios');


async function getUser(id) {
   try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/`;
    let user = axios.get(url)
    .then(response => {
        return response.data; 
    })
    let result = await user;
    return result;

    } catch(error) {
     console.log(error.response.statusText);
    }
};

async function getWeather(lat, lng) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
        let weather = axios.get(url)
        .then(response => {
            return response.data;
        })
        let result = await weather;
        return result;
    } catch (error) {
        console.log(error.response.statusText);
    }
};

getUser(2)
.then(user => {
    console.log(user.name);
    let lat = user.address.geo.lat;
    let lng = user.address.geo.lng;
    getWeather(lat, lng)
    .then(weather => console.log(weather.main.temp))
    .catch(error => console.log(error));
})
.catch(error => console.log(error));


