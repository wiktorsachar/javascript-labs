/*Dodajmy do naszej aplikacji z zadania 1 warunek, jeżeli w adresie pojawi się parametr name przywitajmy
naszego użytkownika po nazwie. (wykorzystajmy wbudowany moduł URL)*/

const http = require('http');

const serv = http.createServer((req, res) => {
    res.writeHead(200, {
    'Content-Type': 'text/plain'
    });
    let url = new URL('http://' + req.headers.host + req.url);
    let name = url.searchParams.get('name');
    if (name) {
        res.end('Hello, ' + name + '.');
    } else {
        res.end('Hello, stranger' + '.');
    };
});
serv.listen(4700);
