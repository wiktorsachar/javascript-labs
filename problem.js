const axios = require('axios');


async function getUser(id) {
   try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/`;
    await axios.get(url)
    /*.then((result) => console.log(result.data.name))*/
    .then((result) => {
        return result.data.name; //czemu to nie dziala? jak zrobic zeby zwracalo wartosc, a nie tylko wyswietlalo w konsoli?
    })
    } catch(error) {
     console.log(error.response.statusText);
    }
};

console.log(getUser(4)) //wywala błąd
