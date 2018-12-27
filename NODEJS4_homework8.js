/*Wykorzystując bibliotekę `axios` zamieńmy z zadania 7 `request`
wraz z naszymi Promise na bibliotekę `axios`.*/

const axios = require('axios');
const fs = require('fs');

const id = 10;

axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(user => {
    console.log(user.data.name);
    const lat = user.data.address.geo.lat;
    const lng = user.data.address.geo.lng;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
        .then(weather => {
            console.log(weather.data.main.temp);
            fs.writeFile('NODEJS4_homework8weather_output.json', JSON.stringify(weather.data), (err) => {
                if (err) throw err;
                console.log('btw saved ur json, bro, dont have to thank');
            })
        })
        .catch(error => console.log(error));
  })
  .catch(error => {
    console.log(error);
});