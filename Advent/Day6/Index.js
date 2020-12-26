const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split("\r\n\r\n")

function part1() {
let bigboi = 0
list.forEach((row , rownum)=> {
    const answers = new Set();
    row = row.replace(/\r\n/g, "")
            let babylove = row.split('')
                babylove.forEach(baby => {
                    answers.add(baby)

                })
bigboi += answers.size
});
return bigboi
}

console.log(part1())

list.forEach((row , rownum)=> {
    let person = row.split('\r\n')
    console.log(person)
});
