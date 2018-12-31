/* W katalogu 01 znajduje się plik user.json. Wykorzystując wiedzę z poprzednich zajęć, stwórzmy
aplikację wczytującą naszego użytkownika z pliku i zamieńmy go na obiekt JS oraz wyświetlmy w
konsoli jego imię.
Użyjmy w tym zadaniu funkcję readFileSync z wbudowanego modułu fs oraz funkcję JSON.parse do
przeparsowania wczytanej zawartości do obiektu.
Zabezpieczmy naszą aplikację tak aby wyłapać błąd prasowania lub odczytu pliku i poinformujmy o tym
użytkownika.*/

const fs = require('fs');
const path = 'NODEJS5_homework1user.json'

function getJSON (path) {
    return new Promise ((resolve, reject) => {
        const data = fs.readFileSync(path);
        resolve(JSON.parse(data));
    })
};

getJSON(path)
    .then(data => console.log('My name is ' + data.lastname + '. ' + data.name + ' ' + data.lastname + '.'))
    .catch(error => console.log('blad odczytu pliku'));