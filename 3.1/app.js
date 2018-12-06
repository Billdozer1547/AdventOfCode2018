var fs = require('fs');
var input = fs.readFileSync('./input.txt','utf8');

var inputarray = input.split('\n');
var locationList = [];
for(var i of inputarray){
    if(i){ //learned from my mistakes on day 1 using new line to split on
        var location = {
            id: i.split('@')[0].trim(),
            xPos: Number(i.split('@')[1].split(':')[0].split(',')[0].trim()),
            yPos: Number(i.split('@')[1].split(':')[0].split(',')[1].trim()),
            xLen: Number(i.split('@')[1].split(':')[1].split('x')[0].trim()),
            yLen: Number(i.split('@')[1].split(':')[1].split('x')[1].trim())
        }
        locationList.push(location);
    }
    else{
        break;
    } 
}
var grid = Array(1000).fill(Array(1000).fill('0'));
var overlapCount = 0;
for(var l of locationList){
    for(var y = 0; y < l.yLen; y++){
        for(var x = 0; x < l.xLen; x++){
            if(grid[l.xPos+x][l.yPos+y] == '0'){
                grid[l.xPos+x][l.yPos+y] = l.id;
            }
            else if(grid[l.xPos+x][l.yPos+y] != 'X'){
                grid[l.xPos+x][l.yPos+y] = 'X';
                overlapCount++;
            }
        }
    }
}

var notDouble = 0;
for(var i =0; i < 1000; i++){
    for(var a = 0; a < 1000; a++){
        if(grid[i][a] != 'X' && grid[i][a] != '0'){
            notDouble++;
        }
    }
}
console.log(notDouble);
console.log(overlapCount);