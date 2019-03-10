/* Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując express.Router(
https://expressjs.com/en/4x/api.html#router)*/

const fs = require('fs');
const express = require('express');
const router = express.Router();


const posts = (() => {
    try {
        let result = JSON.parse(fs.readFileSync('./NODE_JS7_homework8_posts.json'));
        if (Array.isArray(result)) {
            return result;
        } else {
            return [];
        }
    } catch {
        return [];
    }
})();

router.get('/new_post', (req, res) => {
    const { userId, title, body } = req.query;

    let newPost = {
        id: posts.length + 1,
        userId,
        title,
        body,
    };

    posts.push(newPost);
    console.log(posts)
    fs.writeFileSync('NODE_JS7_homework8_posts.json', JSON.stringify(posts));
    
    res.send(`New post has been added: ${userId}, ${title}, ${body}.`);
});

module.exports = router;