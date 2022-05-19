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
function updateRainfall() {
    let maxFields = 2;
    let x = 1;
    console.log(maxFields);
    while (x <= maxFields) {
        console.log(x);
        let addArea = document.getElementById('prov' + [x]).value;
        let addRain = document.getElementById('rain' + [x]).valueAsNumber;
        console.log(addArea + addRain);
        if (addArea !== "" && !isNaN(addRain)) {
            let addRainfall = {
                area: addArea,
                rain: addRain
            }
            data.push(addRainfall);
        
        } else {
            alert("Please enter data");
            return;
        }
        x++;
    }
}
;

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


function addData2(rainfall, fn) {
    // let data = [];
    for (const lotsRain of rainfall) {
        if (fn(lotsRain)) {
            data.push(lotsRain);
        }
    }
    return data;
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


data = [
    { area: 'SK', rain: 10 },
    { area: 'AB', rain: 7 },
    { area: 'BC', rain: 8 },
    { area: 'ON', rain: 7 }
];



var svg = d3.select("svg"),
    margin = 200,
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin

svg.append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", width / 2)
    .attr("y", 50)
    .attr("font-family", "Arial")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .text("Days of Rain")

var xScale = d3.scaleBand().range([0, width]).padding(0.4),
    yScale = d3.scaleLinear().range([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

xScale.domain(data.map(function (d) { return d.area; }));
yScale.domain([0, d3.max(data, function (d) { return (d.rain + 2); })]);

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("y", height - 250)
    .attr("x", width / 2)
    .attr("text-anchor", "end")
    .attr("stroke", "blue")
    .attr("font-size", "16px")
    .attr("fill", "blue")
    .text("PROVINCE");

g.append("g")
    .call(d3.axisLeft(yScale).tickFormat(function (d) {
        return d;
    })
        .ticks(10))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 10)
    .attr("x", -height / 2)
    .attr("dy", "-5.1em")
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Days of Rain");

g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("fill", "green")
    .attr("x", function (d) { return xScale(d.area); })
    .attr("y", function (d) {
        return yScale(d.rain)
            ;
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) { return height - yScale(d.rain); });
;

document.getElementById("rainChart").innerHTML += "";
//OLD CODE
/*function sumRain(data) {
    let rainSumary = {};
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