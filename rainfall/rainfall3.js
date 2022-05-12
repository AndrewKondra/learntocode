const rainfall = [
    { area: 'SK', rain: 10 },
    { area: 'AB', rain: 7 },
    { area: 'MB', rain: 4 },
    { area: 'AB', rain: 4 },
    { area: 'BC', rain: 8 },
    { area: 'SK', rain: 5 },
    { area: 'ON', rain: 6 },
    { area: 'AB', rain: 3 },
    { area: 'SK', rain: 4 },
    { area: 'AB', rain: 8 },
    { area: 'BC', rain: 5 },
    { area: 'ON', rain: 3 },
    { area: 'SK', rain: 10 },
    { area: 'AB', rain: 7 },
    { area: 'MB', rain: 4 },
    { area: 'AB', rain: 4 },
    { area: 'BC', rain: 8 },
    { area: 'SK', rain: 5 },
    { area: 'ON', rain: 7 },
    { area: 'AB', rain: 9 },
    { area: 'SK', rain: 8 },
    { area: 'AB', rain: 6 },
    { area: 'BC', rain: 6 },
    { area: 'QC', rain: 7 }
];


function filterRain(record) {
    return record.rain > 5;
}

function filterList(list, checkArea) {
    return list.filter(newList => newList.area === checkArea).length
}

function addData(rainfall, fn) {
    let rainSummary = [];
    for (const lotsRain of rainfall) {
        if (fn(lotsRain)) {
            rainSummary.push(lotsRain);
        }
    }
    return rainSummary;
}

function sumDays(rainFilt, fn1, fn2) {
    let daysRain = {};
    for (const addDays of rainFilt) {
        if (fn1(addDays)) {
            daysRain[addDays.area] = (fn2(rainFilt, addDays.area));
        }
    }
    return (daysRain);
}

let rainFilt = addData(rainfall, filterRain);
console.log(rainFilt);

let summary = sumDays(rainFilt, filterRain, filterList);
console.log(summary);





//OLD CODE
/*function sumRain(data) {
    let rainSummary = {};
    data.forEach((record) => {
        if (record.area in rainSummary) {
            rainSummary[record.area] = rainSummary[record.area] + (record.rain);
        } else {
            rainSummary[record.area] = record.rain;
        }
    })
    //console.log(rainSummary);
    return rainSummary;
}; 
*/

/* rainFilt = sumRain([
     { area: 'BC', rain: 12 },
     { area: 'ON', rain: 7 },
     { area: 'BC', rain: 4 },
     { area: 'NL', rain: 4 },
     { area: 'ON', rain: 8 },
     { area: 'SK', rain: 5 }
 ]);
 console.log(rainFilt);
 */