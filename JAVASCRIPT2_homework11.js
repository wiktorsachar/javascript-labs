//11)	Create a function that will return the current day name in Polish. 

function dayOfTheWeekInPolish() {
let today = new Date();
let dayOfTheWeek = today.getDay();
switch (dayOfTheWeek) {
    case 1:
        return 'Poniedzialek'
        break;
    case 2:
        return 'Wtorek'
        break;
    case 3:
        return 'Sroda'
        break;
    case 4:
        return 'Czwartek'
        break;
    case 5:
        return 'Piatek'
        break;
    case 6:
        return 'Sobota'
        break;
    case 7:
        return 'Niedziela'
        break;

    default:
        return 'Error'
        break;
}
}

console.log(dayOfTheWeekInPolish())
