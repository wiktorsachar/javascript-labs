/* W katalogu 01 znajduje się plik user.json. Wykorzystując wiedzę z poprzednich zajęć, stwórzmy
aplikację wczytującą naszego użytkownika z pliku i zamieńmy go na obiekt JS oraz wyświetlmy w
konsoli jego imię.
Użyjmy w tym zadaniu funkcję readFileSync z wbudowanego modułu fs oraz funkcję JSON.parse do
przeparsowania wczytanej zawartości do obiektu.
Zabezpieczmy naszą aplikację tak aby wyłapać błąd prasowania lub odczytu pliku i poinformujmy o tym
użytkownika.*/


const fs = require('fs');

try {
    const data = fs.readFileSync('NODEJS5_homework1user.json');
    const user = JSON.parse(data);
    console.log(user.name);
} catch (error) {
    if (error.code == 'ENOENT') {
        console.log('error: blad odczytu pliku');
    } else {
        console.log(error);
    }
} finally {
    console.log('all complete');
}
