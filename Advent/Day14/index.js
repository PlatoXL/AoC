const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\n");
const earliesttime = Number(list[0]);
let temp = list[1].split(/(?<=\d),/g);
const busids = temp.map((busiq) => {
  return Number(busiq.replace(/\D+/g, ""));
});
console.log(busids);

const answers = [];
let pallarinteforloop = 0;
busids.forEach((busid) => {
  let time = 0;
  while (time < earliesttime) {
    time = busid + time;
  }
  answers[pallarinteforloop] = time - earliesttime;
  pallarinteforloop++;
});
let min = Math.min(...answers);
let answer = min * busids[answers.indexOf(min)];
console.log(answer);
