const fs = require("fs");
const tickets = fs.readFileSync("input.txt", "utf8").split("/n");
const rulesdata = fs.readFileSync("rules.txt", "utf8").split("/n");
const rules = 0;
console.log(rules);

for (let i = 0; i < rulesdata.length; i++) {
  rules[i] = rulesdata[i].split;
}

tickets.forEach((ticket) => {});
