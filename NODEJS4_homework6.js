/*Dodajmy do naszej aplikacji z zadania 4 pobieranie pogody dla naszego użytkownika.
Podobnie jak w poprzednim laboratorium. Pamiętajmy o odpowiednim owrapowaniu
naszego zapytania do pogody. Analogicznie jak w zadaniu 4.
Endpoint do pogody:
https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d
6e&lat={LAT}&lon={LNG}
Zarys wywołania aplikacji:getUser(2)
.then(getWeather)
.then(...) <---- wypisz w konsoli temperature
.catch(...)
.finally(...);*/

const request = require('request');

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return new Promise ((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('something went wrong (user)');
            } else {
                resolve(JSON.parse(body));
            }
        })
        
    })
};

function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return new Promise ((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('something went wrong (weather)');
            } else {
                resolve(JSON.parse(body));
            }
        })
        
    })
};

getUser(2)
.then(user => {
    const lat = user.address.geo.lat;
    const lng = user.address.geo.lng;
    console.log(user.name)
    return getWeather(lat, lng);
})
.then(weather => {
    console.log(weather.main.temp)
})
.catch(error => console.log(error))
.finally(() => console.log('all is done'));
