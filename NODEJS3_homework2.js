/*Wykorzystując plik wynikowy z zadania 1 odczytaj plik i wyświetl jedynie nazwisko
(`lastname`) w konsoli.
Końcowym efektem jest wyświetlenie na konsoli nazwiska zapisanego w pliku.*/

const fs = require('fs');

fs.readFile('NODEJS3_homework1_output.json', (err, nameAndLastname) => {
    console.log(JSON.parse(nameAndLastname).lastname);
  });