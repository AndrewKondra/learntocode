const rainfall = [
  { area: 'SK', rain: 12 },
  { area: 'AB', rain: 7 },
  { area: 'MB', rain: 4 },
  { area: 'AB', rain: 4 },
  { area: 'MB', rain: 5 },
  { area: 'SK', rain: 5 }
];

let newRain = [];

function sumRain() {
  rainfall.forEach((record) => {
    //console.log(record.area);
    //console.log(record.rain);
    let newRecord = newRain.filter(areas => areas.area === record.area)
    //console.log(newRecord);
    //console.log(newRecord.length);
    if (newRecord.length == 0) {
      newRain.push(record);
    } else {
      //console.log(newRecord);
      //console.log(newRecord[0].area);
      //console.log(newRecord[0].rain);
      let indexOfObject = newRain.findIndex(object => {
        return object.area == record.area;
      });
      newRain[indexOfObject] = { area: record.area, rain: (record.rain + newRecord[0].rain) };
    }
  }
  )
  console.log(newRain);
};
