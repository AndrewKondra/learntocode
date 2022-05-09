const hockeyStats = [
    { player: 'Matthews', stats: { Goals: 10, Assists: 8 } },
    { player: 'Marner', stats: { Goals: 8, Assists: 15 } },
    { player: 'Bunting', stats: { Goals: 7, Assists: 9 } },
    { player: 'Nylander', stats: { Goals: 6, Assists: 10 } },
    { player: 'Matthews', stats: { Goals: 4, Assists: 2 } },
    { player: 'Marner', stats: { Goals: 0, Assists: 4 } },
    { player: 'Bunting', stats: { Goals: 1, Assists: 1 } },
];
// let data = hockeyStats;
// data.push( { player: 'Kondra', stats: { Goals: 87, Assists: 155 } } );
// console.log(hockeyStats);

function sumStats(data) {
    let statSummary = {};
    data.forEach((record) => {
        if (record.player in statSummary) {
            let sumGoals = record.stats.Goals + statSummary[record.player].Goals;
            let sumAssists = record.stats.Assists + statSummary[record.player].Assists;
            statSummary[record.player] = { Goals: sumGoals, Assists: sumAssists };
        } else {
            statSummary[record.player] = record.stats;
        }
    })
    return statSummary;
}

// let summary = sumStats(hockeyStats);
// console.log(summary);
const myFunc = sumStats;
let summary = sumStats(hockeyStats);
console.log(summary);
