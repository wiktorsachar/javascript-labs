/*Stwórzmy aplikację która pobierając 2 parametry a i b z adresu url wykona mnożenie w naszej aplikacji.
Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).*/

const express = require('express');
const server = express();

server.get('/', (req, res) => {

    const { a, b } = req.query;

    res.send((Number(a)+Number(b)).toString());
    
});

server.listen(4700);

