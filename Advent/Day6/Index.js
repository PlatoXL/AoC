const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split("\r\n\r\n")

let rownum = 0

list.forEach(row => {
    list[rownum].replace("\r\n", "")
    console.log(list[rownum])
    rownum ++

});
