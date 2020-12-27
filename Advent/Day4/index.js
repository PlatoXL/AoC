const fs = require("fs");
const list = fs.readFileSync("input.txt", "utf8").split("\r\n\r\n");

let valid = 0;
const req = "byr, iyr, eyr, hgt, hcl, ecl, pid";

list.forEach((passport) => {
  let field = passport.split(/\r\n| /);
  console.log(field);
});
