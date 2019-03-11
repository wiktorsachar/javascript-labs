/* Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując express.Router(
https://expressjs.com/en/4x/api.html#router)*/

const fs = require('fs');
const express = require('express');
const router = express.Router();

const data = (() => {
    try {
        let result = JSON.parse(fs.readFileSync('./NODE_JS7_homework8_users.json'));
        if (Array.isArray(result)) {
            return result;
        } else {
            return [];
        }
    } catch {
        return [];
    }
})();


router.get('/add', (req, res) => {
    const { name, username, email } = req.query;

    let user = {
        id: data.length + 1,
        name,
        username,
        email
    };

    data.push(user);
    console.log(data)
    fs.writeFileSync('NODE_JS7_homework8_users.json', JSON.stringify(data));
    
    res.send(`New user has been added: ${name}, ${username}, ${email}.`);
});


router.get('/show', (req, res) => {
    const { id } = req.query;
    if (id) {
        res.send(data[id-1]);
    } else {
        res.send(data);
    };
    
    res.send(data);
});

router.get('/delete', (req, res) => {
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

    fs.writeFileSync('NODE_JS7_homework8_users.json', JSON.stringify(data));
    
});


module.exports = router;