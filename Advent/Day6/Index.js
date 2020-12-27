const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\r\n\r\n");

function part1() {
  let bigboi = 0;
  list.forEach((row, rownum) => {
    const answers = new Set();
    row = row.replace(/\r\n/g, "");
    let babylove = row.split("");
    babylove.forEach((baby) => {
      answers.add(baby);
    });
    bigboi += answers.size;
  });
  return bigboi;
}

console.log(part1());

function part2() {
  let output = 0;
  list.forEach((row, rownum) => {
    let persons = row.split("\r\n");
    const forekomst = {};
    persons.forEach((person, j) => {
      let chars = person.split("");
      chars.forEach((char) => {
        forekomst[char] = (forekomst[char] || 0) + 1;
      });
    });
    Object.values(forekomst).forEach((value) => {
      if (value == persons.length) {
        output++;
      }
    });
  });
  return output;
}
console.log(part2());
