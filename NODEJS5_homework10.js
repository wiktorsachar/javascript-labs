/* Stwórzmy aplikację która pobierze informację o użytkowniku i statystykach jego postów i komentarzy.
Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika oraz email.
Pobierzmy wszystkie posty użytkownika i wyświetlmy ich ilość w konsoli.
Dodatkowo sprawdźmy aktywność szukanego użytkownika w komentarzach i wyświetlmy łączną ilość
komentarzy w konsoli.
Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2
Endpoint do postów: https://jsonplaceholder.typicode.com/posts?userId=2
Endpoint do komentarzy: https://jsonplaceholder.typicode.com/comments?postId=11*/

const axios = require('axios');
const id = process.argv[2];

async function getUser(id) {
   try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/`;
    let user = axios.get(url)
    .then(response => {
        return response.data; 
    });
    let result = await user;
    return result;

    } catch(error) {
     console.log(error.response.statusText);
    }
};

async function getPosts(id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        let posts = axios.get(url)
        .then(response => {
            return response.data;
        });
        let result = await posts;
        return result;
    } catch (error) {
        console.log(error.response.statusText);
    }
};

async function getComments(id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        let comments = axios.get(url)
        .then(response => {
            return response.data;
        });
        let result = await comments;
        return result;
    } catch (error) {
        console.log(error.response.statusText);
    }
};



(async function () {
    try {
        const user = await getUser(id);
        console.log(user.username);
        console.log(user.email);

        const posts = await getPosts(id)
        console.log('number of posts: ' + posts.length);

        const comments = await Promise.all(posts.map(x => getComments(x.id)));
      
        let counter = 0;
        for (let i = 0; i < comments.length; i++) {
            counter = counter + comments[i].length  
        }
        
        console.log('number of comments: ' + counter);

    } catch (error) {
        error => console.log(error);
    }

})()


