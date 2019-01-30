/*Dodajmy do zadania 2 możliwość modyfikowania naszego użytkownika i wysłania zmian na nasz
serwer.*/

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

async function modifyUser(userId, name, username, email) {
    try {
        newUserData = {
            name,
            username,
            email
        };
    
        let response = await axios.patch(`http://localhost:4800/users/${userId}`, newUserData);
        console.log(response.data)
    } catch (error) {
        error => console.log(error.message);
    }
};

//getUserById(17)
//createNewUser('Mungo', 'Jerry', 'kiss@myan.us')
//modifyUser(17, 'Stachu Jones', 'stasiek93')