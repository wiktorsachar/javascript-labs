/*Wykorzystując zadanie 6 dodajmy opcję pobrania pogody dla wczytanego
użytkownika
Endpoint wygląda następująca:
https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
Pod kod kluczem {LAT} i {LNG} powinniśmy podać wczytane dane z naszego wcześniejszego
endpointu.*/

const yargs = require('yargs');
const argv = yargs.argv;
const request = require('request');


request(`https://jsonplaceholder.typicode.com/users/${argv.id}`, function (error, response, body) {
    if (response.statusCode !== 200){
        console.log('Something went wrong - user');
    } else {
        let user = JSON.parse(body);
        console.log('name:', user.name, 'lat:', user.address.geo.lat, 'lng:', user.address.geo.lng);
        request(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`, function (error, response, body) {
            if (response.statusCode !== 200){
                console.log('Something went wrong - weather');
            } else {
                    let temperature = JSON.parse(body);
                    console.log('temperature:', Math.round(temperature.main.temp - 273.5), 'degrees Celsius');
            }
        })
    }
});

