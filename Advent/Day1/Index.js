const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split('\n').slice(0, -1)

const nice = "nice"
console.log(nice)

list.forEach(row => {
    const TermOne = row
        for (let j = 0; j < list.length; j++) {
               let termtwo = list[j]
                for (let k = 0; k < list.length; k++) {
                        const termthree = list[k];
                                if (Number(TermOne) + Number(termtwo) + Number(termthree) === 2020) {
                                        console.log(Number(TermOne) * Number(termtwo) * Number(termthree))
                                }
                        
                }
            
        }

    
});