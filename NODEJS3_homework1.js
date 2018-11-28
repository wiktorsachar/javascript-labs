/*Wykorzystując zdobytą wiedzę z poprzednich zajęć skorzystaj z zewnętrznej biblioteki
'yargs' (https://www.npmjs.com/package/yargs) oraz wbudowanego modułu file
system(fs) i stwórz aplikację która zapisze przekazane argumenty
> node app.js --name Jan --lastname Nowak
efektem końcowym powinien być plik z zawartością:
{"name":"Jan","lastname":"Nowak"}*/


const yargs = require('yargs');
const argv = yargs.argv;

let nameAndLastname = {
    name: argv.name,
    lastname: argv.lastname
};

const fs = require('fs')
fs.writeFile('NODEJS3_homework1_output.json', JSON.stringify(nameAndLastname), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
