/* Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując express.Router(
https://expressjs.com/en/4x/api.html#router)*/

const express = require('express');
const server = express();

const usersRouter = require('./NODE_JS7_homework8_users_router');
const postsRouter = require('./NODE_JS7_homework8_posts_router');

server.use(usersRouter);
server.use(postsRouter);

server.listen(4700);