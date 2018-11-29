/*Stwórz aplikację która pobierze informację o użytkowniku podając jego id z API:
https://jsonplaceholder.typicode.com/users/{ID}
i wyświetl w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz
jego imię.
Endpoint z przykładowym ID: https://jsonplaceholder.typicode.com/users/2
Uruchomienie aplikacji:
> node app.js
Wynik w konsoli
lat -43.9509
lng -34.4618*/

let request = require('request');
request('https://jsonplaceholder.typicode.com/users/10', function (error, response, body) {
    let bodyObj = JSON.parse(body)
    console.log('name:', bodyObj.name, 'lat:', bodyObj.address.geo.lat, 'lng:', bodyObj.address.geo.lng)
});