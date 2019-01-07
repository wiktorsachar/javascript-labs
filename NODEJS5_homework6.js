/*Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i pobierzmy
użytkownika dane wykorzystując składnię async/await.
Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2*/

const axios = require('axios');

const id = process.argv[2];

async function getUser() {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/`;
    await axios.get(url)
    .then((result) => console.log(result.data.name));
};

getUser();