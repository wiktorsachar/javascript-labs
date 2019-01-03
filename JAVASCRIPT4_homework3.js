/*	Based on included JSON file. 
    a.	Create a function that will return Json from the file. 
    b.	Create a structures to hold data from the file.
    c.	Map data from function a to structure from b.
    d.	Create object that will give us data about:
        i.	How much money was spend in 2014
        ii.	What company was earning how much
        iii.	What type on transaction was having what spending’s.
        iv.	Values of the spending in each month
        v.	Values of the spending in each day of the week*/


// a ------------------------------------------------------------------------------

function returnJson (path) {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync(path));
    return data;
};

// b, c ----------------------------------------------------------------------------

const data = returnJson('JAVASCRIPT4_homework3data.json');

// d/i -------------------------------------------------------------------------------

function howMuchMoneyWasSpendInYear(dataArray, year) {
    let moneySpend = 0;
    let currentDate = '';
    let currentYear = '';

    for (let i = 0; i < dataArray.length; i++) {
        currentDate = dataArray[i].detailsOfPayent.date;
        currentYear = currentDate.split('')[6] + currentDate.split('')[7] + currentDate.split('')[8] + currentDate.split('')[9];
        if (currentYear == year) {
            moneySpend = moneySpend + Number(dataArray[i].cost);
        }
    }
    
    return { pickedYearSpendings: moneySpend.toFixed(2) }
};


// d/ii -------------------------------------------------------------------------------

function whatCompanyIsEarningHowMuch(dataArray) {
    let ecstasia = 0;
    let mangelica = 0;
    let codax = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].detailsOfPayent.company == 'ECSTASIA') {
            ecstasia = ecstasia + Number(dataArray[i].cost);
        } else if (dataArray[i].detailsOfPayent.company == 'MANGELICA') {
            mangelica = mangelica + Number(dataArray[i].cost);
        } else if (dataArray[i].detailsOfPayent.company == 'CODAX') {
            codax = codax + Number(dataArray[i].cost);
        } else {console.log('error: wrong company')}
        
    }
    
    return {
        ecstasiaEarnings: ecstasia.toFixed(2),
        mangelicaEarnings: mangelica.toFixed(2),
        codaxEarnings: codax.toFixed(2)
    }
};


// d/iii ----------------------------------------------------------------------------------

function whatTypeOfTransactionWasHavingWhatSpendings(dataArray) {
    let type1 = 0;
    let type2 = 0;
    let type3 = 0;
    let type4 = 0;
    let type5 = 0;

    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].detailsOfPayent.Type == 1) {
            type1 = type1 + Number(dataArray[i].cost);
        } else if (dataArray[i].detailsOfPayent.Type == 2) {
            type2 = type2 + Number(dataArray[i].cost);
        } else if (dataArray[i].detailsOfPayent.Type == 3) {
            type3 = type3 + Number(dataArray[i].cost);
        } else if (dataArray[i].detailsOfPayent.Type == 4) {
            type4 = type4 + Number(dataArray[i].cost);
        } else if (dataArray[i].detailsOfPayent.Type == 5) {
            type5 = type5 + Number(dataArray[i].cost);
        } else {console.log('error: wrong transaction type')}
    }
    
    return {
        type1Spendings: type1.toFixed(2),
        type2Spendings: type2.toFixed(2),
        type3Spendings: type3.toFixed(2),
        type4Spendings: type4.toFixed(2),
        type5Spendings: type5.toFixed(2)
        
    }
};


// d/iv ----------------------------------------------------------------------------------

function howMuchMoneyWasSpendInEachMonth(dataArray) {
    let januarySpendings = 0;
    let februarySpendings = 0;
    let marchSpendings = 0;
    let aprilSpendings = 0;
    let maySpendings = 0;
    let juneSpendings = 0;
    let julySpendings = 0;
    let augustSpendings = 0;
    let septemberSpendings = 0;
    let octoberSpendings = 0;
    let novemberSpendings = 0;
    let decemberSpendings = 0;

    let currentDate = '';
    let currentMonth = '';

    for (let i = 0; i < dataArray.length; i++) {
        currentDate = dataArray[i].detailsOfPayent.date;
        currentMonth = currentDate.split('')[3] + currentDate.split('')[4];
        switch (currentMonth) {
            case '01':
                januarySpendings = januarySpendings + Number(dataArray[i].cost);
                break;
            case '02':
                februarySpendings = februarySpendings + Number(dataArray[i].cost);
                break;
            case '03':
                marchSpendings = marchSpendings + Number(dataArray[i].cost);
                break;
            case '04':
                aprilSpendings = aprilSpendings + Number(dataArray[i].cost);
                break;
            case '05':
                maySpendings = maySpendings + Number(dataArray[i].cost);
                break;
            case '06':
                juneSpendings = juneSpendings + Number(dataArray[i].cost);
                break;
            case '07':
                julySpendings = julySpendings + Number(dataArray[i].cost);
                break;
            case '08':
                augustSpendings = augustSpendings + Number(dataArray[i].cost);
                break;
            case '09':
                septemberSpendings = septemberSpendings + Number(dataArray[i].cost);
                break;
            case '10':
                octoberSpendings = octoberSpendings + Number(dataArray[i].cost);
                break;
            case '11':
                novemberSpendings = novemberSpendings + Number(dataArray[i].cost);
                break;
            case '12':
                decemberSpendings = decemberSpendings + Number(dataArray[i].cost);
                break;
            default:
                break;
        }
    }

    return {
        januarySpendings: januarySpendings.toFixed(2),
        februarySpendings: februarySpendings.toFixed(2),
        marchSpendings: marchSpendings.toFixed(2),
        aprilSpendings: aprilSpendings.toFixed(2),
        maySpendings: maySpendings.toFixed(2),
        juneSpendings: juneSpendings.toFixed(2),
        julySpendings: julySpendings.toFixed(2),
        augustSpendings: augustSpendings.toFixed(2),
        septemberSpendings: septemberSpendings.toFixed(2),
        octoberSpendings: octoberSpendings.toFixed(2),
        novemberSpendings: novemberSpendings.toFixed(2),
        decemberSpendings: decemberSpendings.toFixed(2)
    }
};


// d/v ------------------------------------------------------------------------------

function eachDayOfTheWeekSpending(dataArray) {
    let currentDate = '';
    let currentYear = '';
    let currentMonth = '';
    let currentDay = '';
    let currentDateFormated = '';
    let monday = 0;
    let tuesday = 0;
    let wednesday = 0;
    let thursday = 0;
    let friday = 0;
    let saturday = 0;
    let sunday = 0;

    for (let i = 0; i < dataArray.length; i++) {
        currentDate = dataArray[i].detailsOfPayent.date;
        currentYear = Number(currentDate.split('')[6] + currentDate.split('')[7] + currentDate.split('')[8] + currentDate.split('')[9]);
        currentMonth = Number(currentDate.split('')[3] + currentDate.split('')[4]);
        currentDay = Number(currentDate.split('')[0] + currentDate.split('')[1]);
        currentDateFormated = new Date(Date.UTC(currentYear, currentMonth-1, currentDay)).getDay();
        
        switch (currentDateFormated) {
            case 1:
                monday = monday + Number(dataArray[i].cost);
                break;
            case 2:
                tuesday = tuesday + Number(dataArray[i].cost);
                break;
            case 3:
                wednesday = wednesday + Number(dataArray[i].cost);
                break;
            case 4:
                thursday = thursday + Number(dataArray[i].cost);
                break;
            case 5:
                friday = friday + Number(dataArray[i].cost);
                break;
            case 6:
                saturday = saturday + Number(dataArray[i].cost);
                break;
            case 0:
                sunday = sunday + Number(dataArray[i].cost);
                break;
        
            default:
                break;
        }
    }
    return {
        mondaySpendings: monday.toFixed(2),
        tuesdaySpendings: tuesday.toFixed(2),
        wednesdaySpendings: wednesday.toFixed(2),
        thursdaySpendings: thursday.toFixed(2),
        fridaySpendings: friday.toFixed(2),
        saturdaySpendings: saturday.toFixed(2),
        sundaySpendings: sunday.toFixed(2),
    }
};

// final ----------------------------------------------------------------------------

const finalData = (() => {
    let i = howMuchMoneyWasSpendInYear(data, 2014);
    let ii = whatCompanyIsEarningHowMuch(data);
    let iii = whatTypeOfTransactionWasHavingWhatSpendings(data);
    let iv = howMuchMoneyWasSpendInEachMonth(data);
    let v = eachDayOfTheWeekSpending(data);
    return Object.assign(i, ii, iii, iv, v);
})();

console.log(finalData);
