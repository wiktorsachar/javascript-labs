/*Rozszerzmy naszą aplikację z zadania 4 o dodatkowe działania matematyczne takie jak mnożenie,
dzielenie i odejmowanie. Podzielmy zadania na odpowiednie ścieżki.
/mnozenie?a=1&b=3
/dzielenie?a=1&b=3
/dodawanie?a=1&b=3
/odejmowanie?a=1&b=3*/

const express = require('express');
const server = express();

server.get('/dodawanie', (req, res) => {
    const { a, b } = req.query;
    res.send((Number(a)+Number(b)).toString());
});

server.get('/odejmowanie', (req, res) => {
    const { a, b } = req.query;
    res.send((Number(a)-Number(b)).toString());
});

server.get('/mnozenie', (req, res) => {
    const { a, b } = req.query;
    res.send((Number(a)*Number(b)).toString());
});

server.get('/dzielenie', (req, res) => {
    const { a, b } = req.query;
    res.send((Number(a)/Number(b)).toString());
});

server.listen(4700);
