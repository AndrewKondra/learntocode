const rainfall = [
    { area: 'SK', rain: 12 },
    { area: 'AB', rain: 7 },
    { area: 'MB', rain: 4 },
    { area: 'AB', rain: 4 },
    { area: 'MB', rain: 5 },
    { area: 'SK', rain: 5 }
];

function sumRain(data) {
    let rainSummary = {};
    data.forEach((record) => {
        if (record.area in rainSummary) {
            rainSummary[record.area] = rainSummary[record.area] + (record.rain);
        console.log(rainSummary);
        } else {
            rainSummary[record.area] = record.rain;
        }
    })
    //console.log(rainSummary);
    return rainSummary;
};



let answer = sumRain(rainfall);
console.log(answer);

answer = sumRain( [
    { area: 'BC', rain: 12 },
    { area: 'ON', rain: 7 },
    { area: 'BC', rain: 4 },
    { area: 'NL', rain: 4 },
    { area: 'ON', rain: 8 },
    { area: 'SK', rain: 5 }
]);
console.log(answer);