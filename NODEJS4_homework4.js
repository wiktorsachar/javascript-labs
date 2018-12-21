/*Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki `request` i
pobierzmy użytkownika dane(https://jsonplaceholder.typicode.com/users/2). Przeróbmy tak
wywołanie naszego zapytania aby wykorzystywało Promise zamiast Callback.
*/

const request = require('request');
const yargs = require('yargs');
const id = yargs.argv.id;

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

getUser(id)
    .then(success => console.log(success.name))
    .catch(error => console.log(error)); 
    
