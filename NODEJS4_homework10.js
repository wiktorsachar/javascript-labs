/*Dodajmy do zadania 9 kolejny element łańcucha o zapis wczytanej listy zdjęć.
Wykorzystujemy tutaj moduł wbudowany `fs` i funkcje `writeFile`. Zamiast opakowywać samodzielnie
funkcję w Promise wykorzystajmy wbudowane narzędzie z modułu `util` (więcej na:
https://nodejs.org/dist/latest-v11.x/docs/api/util.html#util_util_promisify_original) np.:
const util = require('util');
const fs = require('fs');
const writeFilePromise = util.promisify(fs.writeFile);
...*/

const request = require('request');
const util = require('util');
const fs = require('fs');

const writeFilePromise = util.promisify(fs.writeFile);

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
    return picture;
})
.then(picture => {
    const picturesStringified = JSON.stringify(picture);
    return writeFilePromise('NODEJS4_homework10pictures.json', picturesStringified);
})
.catch(error => console.log(error))
.finally(() => console.log('all is done'));