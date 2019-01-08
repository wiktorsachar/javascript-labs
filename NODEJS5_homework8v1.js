/*Wykorzystując składnię async/await zmodyfikujmy zadanie 7 tak aby pobrać kilku użytkowników w tej
samej chwili wykorzystując Promise.all(). Wyświetlmy ich imiona w konsoli. (id użytkowników:
2,3,5,7,8,10)*/

const axios = require('axios');

async function getUser(id) {
   try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/`;
    await axios.get(url)
    .then((result) => console.log(result.data.name))
    } catch(error) {
     console.log(error.response.statusText);
    }
};

Promise.all([getUser(2), getUser(3), getUser(5), getUser(7), getUser(8), getUser(10)])
    .then(user => {
        user.forEach(x => {
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log('all is done'));

