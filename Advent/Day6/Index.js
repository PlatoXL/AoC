const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split("\r\n\r\n")

function part1() {
let bigboi = 0
list.forEach((row , rownum)=> {
    const answers = new Set();
    row = row.replace(/\r\n/g, "")
            var babylove = row.split('')
                babylove.forEach(baby => {
                    answers.add(baby)

                })
bigboi += answers.size
});
return bigboi
}

console.log(part1())

function part2() {
    list.forEach((row , rownum)=> {
        row = row.replace(/\r\n/g, "")
                var chars = row.split('')

    });
    return
    }