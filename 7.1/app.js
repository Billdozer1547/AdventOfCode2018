var fs = require('fs');
var input = fs.readFileSync('./input.txt','utf8');
var inputarray = input.split('\n');

var resultList = [];

for(var i of inputarray){
    if(i){
        if(resultList.includes(i[5])){
            if(resultList.includes(i[36])){
                var indexToRemove = resultList.indexOf(i[36]);
                resultList.splice(indexToRemove,1);
            }
            var index = resultList.indexOf(i[5]);
            resultList.splice(index,0,i[36]);
        }     
        else{
            resultList.push(i[5]);
            resultList.push(i[36]);            
        }
    }
    else{
        break;
    }
}

console.log(resultList.join(''));