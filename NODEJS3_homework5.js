/*Rozszerzmy zadanie 4 tak aby nasza aplikacja poinformowała użytkownika o błędzie
pobierania danych lub braku szukanego użytkownika w bazie.Każdy `response` w swoim `callback` posiada informacje niezbędne do sprawdzenia
poprawności pobranych danych, taki callback wygląda następująco:
function callback(error, response, body) {
// … ciało funkcji
} e
rror – jest błędem który informuję nas iż jest problem z połączeniem do serwera
response – jest naszą odpowiedzią która zawiera informacje jakie serwer nam zwrócił(w
naszym zadaniu istotny jest `statusCode`, w przypadku zwrócenia poprawnie danych
otrzymamy kod z numerem 200 (https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP) w
innym przypadku dostaniemy inny kod.
body – dane zwrócone z naszego API.
W tym zadaniu pobawmy się w debugowanie! Zobaczmy kiedy i jakie dane przychodzą z
serwera!*/

const request = require('request');
request('https://jsonplaceholder.typicode.com/users/100', function (error, response, body) {
    console.log('error:', error);
    console.log('status code:', response.statusCode);
    let bodyObj = JSON.parse(body);
    console.log('name:', bodyObj.name, 'lat:', bodyObj.address.geo.lat, 'lng:', bodyObj.address.geo.lng);
    
});

