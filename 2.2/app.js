var fs = require('fs');
var input = fs.readFileSync('./input.txt','utf8');
var idList = input.split('\n');
for (var i = 0; i < idList.length; i++) {
	for (var j = i + 1; j < idList.length; j++) {
		var id1 = [...idList[i]];
		var id2 = [...idList[j]];

        var difference = id1.reduce((total, num, i) => 
            total + (num == id2[i] ? 0 : 1)
            , 0);

		if (difference == 1) {
			console.log(idList[i]);
			console.log(idList[j]);
		}
	}
}