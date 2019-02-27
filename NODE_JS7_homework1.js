/*. Stwórzmy nasz pierwszy serwer wykorzystując wbudowany moduł HTTP, który wyśle do naszego klienta
przywitanie. Sprawdźmy czy działa aplikacja poprzez uruchomienie przeglądarki i wysłanie żądania do
naszego serwera. (port 4700)*/

const http = require('http');

const serv = http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain'
});
res.end('message');
});
serv.listen(4700);