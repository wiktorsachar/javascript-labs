/*Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników
Stworzyć ‘końcówkę’ /add do dodawania użytkownika która przyjmuje parametry ?
name=Jan&username=janko&email=jan@nowak.abc
Dodać ścieżkę wyświetlania wszystkich użytkowników oraz jeżeli zostanie podany odpowiedni id
wyświetlić jedynie jednego użytkownika
Rozszerzyć aplikację o kasowanie użytkownika poprzez odpowiednią ścieżkę*/

const express = require('express');
const server = express();
const data = [];

server.get('/add', (req, res) => {
    const { name, username, email } = req.query;

    let user = {
        id: data.length + 1,
        name,
        username,
        email
    };

    data.push(user);
    console.log(data)
    
    res.send(`New user has been added: ${name}, ${username}, ${email}.`);
});

server.get('/show', (req, res) => {
    const { id } = req.query;
    if (id) {
        res.send(data[id-1]);
    } else {
        res.send(data);
    };
    
    res.send(data);
});

server.get('/delete', (req, res) => {
    const { id } = req.query;

    let user = {
        id,
        name: "deleted",
        username: "deleted",
        email : "deleted"
    };

    for (let i = 0; i < data.length; i++) {
        if (i === id - 1) {
            data[i] = user;
            res.send(`User with id ${id} has been deleted.`);
        }
    };
    
    res.send(`There is no user with this id.`);

});

server.listen(4700);