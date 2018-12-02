var fs = require('fs');
var input = fs.readFileSync('./input.txt','utf8');

var results = input.split('\n').reduce(processId,[0, 0]);

console.log(results[0] * results[1]);

function processId(total,num){
	var chars = [...num];
	var found = {};
	for (var char of chars) {
		found[char] = found[char] ? found[char] + 1 : 1;
	}
	if (Object.keys(found).some(k => found[k] === 2)){
        total[0]++;
    } 
	if (Object.keys(found).some(k => found[k] === 3)){
        total[1]++;
    } 
	return total
}