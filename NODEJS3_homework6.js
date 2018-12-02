/*Dodajmy do zadania 5 możliwość dynamicznego wprowadzania ID poprzez wczytanie
zewnętrznej biblioteki `yargs`
> node app.js --id=2
Wynik w konsoli:
Ervin Howell
lat -43.9509
lng -34.4618
> node app.js --id=20
Wynik w konsoli:
User not found.*/

const yargs = require('yargs');
const argv = yargs.argv;
const request = require('request');
let id = argv.id;

request('https://jsonplaceholder.typicode.com/users/' + id, function (error, response, body) {
    if (response.statusCode == 404){
        console.log('User not found.')
    } else {
        let bodyObj = JSON.parse(body);
        console.log('name:', bodyObj.name, 'lat:', bodyObj.address.geo.lat, 'lng:', bodyObj.address.geo.lng);
    }
});