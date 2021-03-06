/*Wzorując się na zadaniu 6 stwórzmy analogicznie obsługę tablicy zawierającej posty. Aplikacja ma
rozszerzyć naszą już istniejącą aplikację z zadania 6.
Struktura postu:
{
id: 0,
userId: 0,
title: '',
body: ''
}*/

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

//------------------------------------------------------------------------------------

const posts = [];

server.get('/new_post', (req, res) => {
    const { userId, title, body } = req.query;

    let newPost = {
        id: posts.length + 1,
        userId,
        title,
        body,
    };

    posts.push(newPost);
    console.log(posts)    
    res.send(`New post has been added: ${userId}, ${title}, ${body}.`);
});

server.listen(4700);