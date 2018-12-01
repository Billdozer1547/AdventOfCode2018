var fs = require('fs');

var input = fs.readFileSync('./input.txt','utf8');

var deltas = input.replace(/\n/g,",").replace(/\+/g,"").split(",").map(Number);

const freqs = [];
var sum = 0;
while(true){
    for(let i = 0; i < deltas.length; i++){
        var num = deltas[i];
        if(num == 0){
            //need this check because I was too lazy to remove the 0 at the end of the file due to the replace/split sequence above
            continue;
        }
        sum += num;
        if(freqs.includes(sum)){
            console.log(sum);
            return;
        }
        else{
            freqs.push(sum);
        }
    }
}