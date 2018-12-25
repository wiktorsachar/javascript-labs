/*Rozszerzając zadanie 6 z wykorzystaniem wiedzy z poprzednich zajęć, zapiszmy nasz
cały obiekt pogody do pliku wykorzystując wbudowany moduł `fs` i funkcję
`writeFile`. Oczywiście zadanie polega na odpowiednim dostosowaniu funkcji aby
obsługiwała Promise.
function saveToFile(obj) {
return ... <----- implementacja Promise
}
getUser(2)
.then(getWeather)
.then(...) <---- wypisz w konsoli temperature
.then(weather => {
return saveToFile(weather)
})
.catch(...)
.finally(...);*/

const request = require('request');
const fs = require('fs');

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
    fs.writeFile('NODEJS4_homework7weather_output.json', JSON.stringify(weather), (err) => {
        if (err) throw err;
        console.log('btw saved ur json, bro, dont have to thank');
      })
})
.catch(error => console.log(error))
.finally(() => console.log('all is done'));
