const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\r\n\r\n");

function part1() {
  let valid = 0;
  const req = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
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
    });
    if (numcorrectfield == 7) {
      valid++;
    }
  });
  return valid;
}

//console.log(part1());

function part2() {
  let valid = 0;
  const req = [
    /byr:((19[2-9][0-9])|(200[0-2]))$/,
    /iyr:((201[0-9])|(2020))$/,
    /eyr:((202[0-9])|(2030))$/,
    /hgt:(((1[5-8][0-9])|(19[0-3]))cm)|hgt:((59)|(6[0-9])|(7[0-6]))in/,
    /hcl:#([a-f]|[0-9]){6}$/,
    /ecl:((amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth))/,
    /pid:(\d){9}$/,
  ];
  list.forEach((passport) => {
    let fields = passport.split(/\r\n| /);
    let numcorrectfield = 0;
    fields.forEach((field) => {
      for (let i = 0; i < 7; i++) {
        if (req[i].test(field) == true) {
          numcorrectfield++;
        }
      }
    });
    if (numcorrectfield == 7) {
      valid++;
    }
  });
  return valid;
}

console.log(part2());
