/* Jak możemy zaobserwować podczas tworzenia aplikacji na wbudowanym module HTTP uciążliwe jest
pobieranie danych wysłanych przez klienta. Aby usprawnić tworzenie serwera web powstały różne
frameworki, m.in. Express który pozwala na szybsze postawienie naszego serwera.
Zmieńmy nasz kod z zadania 2 tak aby był wykorzystywany framework Express*/

const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    const { name } = req.query;
    if (name) {
        res.send('Hello, ' + name + '.');
    } else {
        res.send('Hello, stranger.');
    }
});

app.listen(4700);