// import React, { Component, useEffect, useState } from "react";
// import getActivities from './getActivities';
// import SendData from './SendData';

// class ActTable extends Component {
//     constructor(activities) {
//         super();
// const activities = async () =>  {await getActivities(5) }
// console.log(activities)
// this.state = {
//     activityNumber: 5,
//     activities: []
// };

// console.log(this.state.activities)
// this.onInputchange = this.onInputchange.bind(this);
// this.state.activities = async () => await getActivities(this.state.activityNumber)
// }

// async onInputchange(event) {
//     const activities = await getActivities(this.state.activityNumber)
//     console.log(activities)
//     this.setState(
//         {
//             activities,
//             [event.target.name]: event.target.value,
//         });
//     // console.log(this.state.activityNumber)
// }

// render() {
//     console.log(this.state.activities)

import './App.css';
import './index.css';
// import background from "./activities2.png";

const ActTable = (tableProp) => {
    const tableData = tableProp.activities
    // console.log(tableData)
    return (
        <div className="flex w-full justify-center pb-6 ">
            <table className="w-4/5 justify-center " >
                <thead className="">
                    <tr className="">
                        <th classname="b px-4 py-2">
                            Name</th>
                        <th classname="px-4 py-2 ">
                            Activity</th>
                        <th classname="px-4 py-2">
                            Distance</th>
                        <th classname="px-4 py-2">
                            Date</th>
                        <th classname="px-4 py-2">
                            Time Stamp</th>
                    </tr>
                </thead>
                <tbody className="">
                    {tableData.map((data) => (
                        <tr className="text-center">
                            <td classname="px-4 py-2">
                                {data.name}</td>
                            <td classname="px-4 py-2">
                                {data.activity}</td>
                            <td classname="px-4 py-2">
                                {data.distance}</td>
                            <td classname="px-4 py-2">
                                {data.act_date}</td>
                            <td classname="px-4 py-2">
                                {data.time_stamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
// }
export default ActTable;