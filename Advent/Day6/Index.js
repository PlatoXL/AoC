const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split("\n").slice(0, -1)

console.log(list)