/*Zmodyfikujmy zadanie 4 tak aby pobrać kilku użytkowników w tej samej chwili wykorzystując
`Promise.all()`. Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,3,5,7,8,10).
Poinformujmy iż nasz Promise został w pełni rozwiązany.
Promise.all([getUser(), ...])
.then(...)
.catch(...)
.finally(...);*/

const request = require('request');

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return new Promise ((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('something went wrong');
            } else {
                resolve(JSON.parse(body));
            }
        })   
    })
};

Promise.all([getUser(2), getUser(3), getUser(5), getUser(7), getUser(8), getUser(10)])
    .then(user => {
        user.forEach(x => {
            console.log(x.name)
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log('all is done'));