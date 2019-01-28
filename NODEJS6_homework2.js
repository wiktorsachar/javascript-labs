/*Dodajmy do zadania 1 funkcjonalność pozwalającą na pobranie użytkownika. Już na tym etapie
powinniśmy podzielić naszą aplikację na odpowiednie moduły*/

const axios = require("axios");


async function createNewUser(name, username, email) {
    newUserData = {
        name,
        username,
        email
    };

    let myAxios = axios.create({
        headers: {
        "Content-Type": "application/json"
        }
    });

    let response = await myAxios.post("http://localhost:4800/users", newUserData);

    console.log(`response ${response.statusText} id: ${response.data.id}`);
};


async function getUserById(userId) {
    try {
        let response = await axios.get(`http://localhost:4800/users/${userId}`);
        console.log('Pobrano:', response.data);
        return response.data;
        
    } catch(error) {
        error => console.log(error.message);
    }
};

//getUserById(17)
//createNewUser('Mungo', 'Jerry', 'kiss@myan.us')