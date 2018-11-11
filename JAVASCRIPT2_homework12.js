//12)	Create a function that tells us how many days till Friday

function daysTillPiateczekPiatunio() {
    const today = new Date();
    const currentDay = today.getDay();
    if (currentDay<5) {
        console.log('There are: ' + (5 - currentDay) + ' days till Friday!');
    } else if (currentDay === 5) {
        console.log('Today is Friday!')
    } else {
        console.log('There are: ' + (5 + (7-currentDay)) + ' days till Friday!');
    };
};

daysTillPiateczekPiatunio()

