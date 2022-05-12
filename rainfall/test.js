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
    { area: 'QC', rain: 6 },
    { area: 'ON', rain: 1 }
];

function filterList(list, checkArea) {
    return rainfall.filter(newList => newList.area === checkArea).length
    //console.log(numbDays);
}

let testFunc = filterList(rainfall, 'QC');
console.log(testFunc)