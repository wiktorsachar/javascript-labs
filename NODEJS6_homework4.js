/*Dodajmy do naszej aplikacji usuwanie użytkownika z serwera. Sprawdźmy czy nasz użytkownik został
usunięty wysyłając zapytanie o pobranie danych.*/

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


async function deleteUser(userId) {
    try {
        let response = await axios.delete(`http://localhost:4800/users/${userId}`)
        console.log(`User with ID = ${userId} has been deleted.`)
    } catch(error) {
        error => console.log(error);
    }
};

//getUserById(17)
//createNewUser('Lama', 'Osmola', 'kiss@myan.us')
//modifyUser(17, 'Stachu Jones', 'stasiek93')
//deleteUser(13)