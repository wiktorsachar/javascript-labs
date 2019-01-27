/*Stwórzmy aplikację która stworzy nowego użytkownika wysyłając odpowiednie zapytanie do naszego
 lokalnego serwera.
Model użytkownika:

{
    "name": "...",
    "username": "...",
    "email": "...",
}
Wyświetlmy informację czy poprawnie użytkownik został zapisany i jaki otrzymał id.*/

const axios = require("axios");
const newUserData = {
  name: "John",
  username: "Rambo",
  email: "johnrambo@bad.ass",
};
const myAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});
myAxios.post("http://localhost:4800/users", newUserData).then(response => {
  console.log(`response ${response.statusText} id: ${response.data.id}`);
});