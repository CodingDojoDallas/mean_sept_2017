function permStr(str, sub="", arr=[]){
	var length = str.length;
	if(length == 0){
		arr.push(sub);
	}
	for(var i = 0; i < length; i++){
		var sub2 = sub + str[i];
		var newStr = str.slice(0, i) + str.slice(i + 1);
		permStr(newStr, sub2, arr);
	}
	return arr;
}

var result = permStr('have');
console.log(result);