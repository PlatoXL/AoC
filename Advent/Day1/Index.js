const fs = require('fs')
const list = fs.readFileSync('input.txt', 'utf8').split('\r\n').slice(0, -1)

const nice = "nice"

list.forEach((row, i) => {
    var TermOne = list[i]
        for (let j = 0; j < list.length; j++) {
            var TermTwo = list[j];
                if (TermOne + TermTwo == "2020") {
                        console.log(TermOne);
                        console.log(TermTwo);
                        console.log(nice);
                }
            
        }

    
});