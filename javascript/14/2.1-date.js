


const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const d = new Date();
const time = d.toLocaleTimeString('it-IT');
// const time = d.toLocaleTimeString().replace('PM','').replace('AM','');


const day = d.getDay();

console.log(`Today is : ${weekday[day]} \nCurrent time is : ${time}`);
