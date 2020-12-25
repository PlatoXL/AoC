const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split("\r\n\r\n")

let rownum = 0

list.forEach(row => {
    list[rownum] = list[rownum].replace(/\r\n/g, "")
    //list[rownum] = list[rownum].replace(/.{2,}/g, "") WHYYYY? How to regex plz?
    rownum ++

});



console.log(list)