var fs = require('fs');

var input = fs.readFileSync('./input.txt','utf8');

var groomedInput = input.replace(/\n/g,",").replace(/\+/g,"").split(",");

var output = 0;

for(num in groomedInput){
    output += Number(groomedInput[num]);
}

console.log(output);