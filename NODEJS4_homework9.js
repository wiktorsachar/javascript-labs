/*Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście
albumie i przypisanych do niego zdjęciach.
Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika.Z pobranego albumu wyświetlmy 
ilość wszystkich albumów oraz nazwę pierwszego z nich.
Z pobranych zdjęć wyświetlmy wszystkie tytuły.
Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek
(.catch())
endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2
endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=2
endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1
Ćwiczenie to ma za zadanie pokazać jak działają tzw. `chain Promise`(łańcuch ‘obietnic’)*/

const request = require('request');

const id = 5;

function getUser(userID) {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}`;
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

function getAlbum(userID) {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userID}`;
    return new Promise ((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('something went wrong (album)');
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
};

function getPicture(albumID) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`;
    return new Promise ((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('something went wrong (picture)');
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
};

getUser(id)
.then(user => {
    console.log('name:', user.name);
    return getAlbum(id);
})
.then(album => {
    console.log('number of albums:', album.length);
    console.log('name of the first album:', album[0].title);
    const albumID = album[0].id;
    return getPicture(albumID);
})
.then(picture => {
    console.log('names of pictures:')
    for (let i = 0; i < picture.length; i++) {
        console.log(picture[i].title);
    }
})
.catch(error => console.log(error))
.finally(() => console.log('all is done'));

