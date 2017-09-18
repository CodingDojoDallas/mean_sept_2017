function rStrSub(str, sub='', arr=[]){
	if(str.length === 0){
		arr.push(sub);
	} else {
		rStrSub(str.slice(1), sub, arr);
		sub += str[0];
		rStrSub(str.slice(1), sub, arr);
	}
	return arr;
}

var result = rStrSub('abc');
console.log(result);
