/*Podzielmy naszą aplikację z punktu 8 na moduły odpowiednio:
app.js – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu
user.js
user.js – plik z pobieraniem danych użytkownika
weather.js – plik z pobieraniem danych o prognozie pogody*/ 

const yargs = require('yargs');
const argv = yargs.argv;
const request = require('request');
const getWeather = require('./NODEJS3_homework9weather').getWeather;
const getUser = require('./NODEJS3_homework9user').getUser;
request(`https://jsonplaceholder.typicode.com/users/${argv.id}`, getUser);