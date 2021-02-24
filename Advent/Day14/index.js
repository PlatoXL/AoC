const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\n");
const earliesttime = list[0];
let temp = list[1].split(/(?<=\d),/g);
const busids = temp.map((busid) => {
  return busid.replace(/\D+/g, "");
});
console.log(busids);

busids.forEach((busid) => {
  let time = 0;
  while (time < earliesttime) {
    time += busid;
  }
  console.log(time);
});
