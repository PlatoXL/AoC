const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\r\n\r\n");

let valid = 0;
const req = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

function part1() {
  list.forEach((passport) => {
    let fields = passport.split(/\r\n| /);
    let numcorrectfield = 0;
    fields.forEach((field) => {
      for (let i = 0; i < 7; i++) {
        let reqtest = new RegExp(req[i]);
        if (reqtest.test(field) == true) {
          numcorrectfield++;
        }
      }
      if (numcorrectfield == 7) {
        valid++;
      }
    });
  });

  return valid;
}

console.log(part1());
