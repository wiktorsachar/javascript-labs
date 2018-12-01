/*Bazując na zadaniu 2 zabezpieczmy naszą aplikację tak aby w przypadku błędu
odczytu pliku(zła nazwa pliku/inny rodzaj błędu) poinformowała użytkownika o
problemie w konsoli.*/

const fs = require('fs');

fs.readFile('NODEJS3_homework1_output.json', (err, data) => {
    if (err) {
      console.log('error:', err)
    } else {
      console.log(JSON.parse(data).lastname);
    }
  });
