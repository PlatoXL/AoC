const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\n");
const earliesttime = Number(list[0]);
const busids = list[1].split(/(?<=\d),/g).map((busiq) => {
  return Number(busiq.replace(/\D+/g, ""));
});
function part1() {
  let answers = [];
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
  return answer;
}

console.log(part1());
