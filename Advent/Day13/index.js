const { time } = require("console");
const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\n");
const earliesttime = Number(list[0]);
const nerminIds = list[1].match(/\d+/g);
const busids = list[1].split(/(?<=\d),/g).map((busiq) => {
  return Number(busiq.replace(/\D+/g, ""));
});

const times = list[1].split(",");

let timetable = new Map();
for (let i = 0; i < times.length; i++) {
  const time = times[i];
  timetable.set(i, time);
}
timetable.forEach((time, timeslot) => {
  if (time == "x") {
    timetable.delete(timeslot);
  }
});

let t = 1;
let isdone = false;
while (isdone == false) {
  timetable.forEach((time, timeslot) => {
    timetable.set(timeslot, time * t);
  });
  if (condition) {
  }
  console.log(timetable);
  isdone = true;
  t++;
}

function part1() {
  let answers = [];
  busids.forEach((busid) => {
    let time = 0;
    while (time < earliesttime) {
      time = busid + time;
    }
    answers.push(time - earliesttime);
  });
  let min = Math.min(...answers);
  let answer = min * busids[answers.indexOf(min)];
  return answer;
}
