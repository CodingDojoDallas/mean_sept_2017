var _ = {
	map: function(arr, callback){
		//create a new array
		let output = [];
		//apply the callback to each element in the input array
		for(let i in arr){
			console.log('i: ', i);
			output.push(callback(arr[i]))
		}
		//return the new array
		return output;
	},
	reduce: function(arr, callback, memo=0){
		for(let i = 0; i < arr.length; i++){
			memo = callback(memo, arr[i]);
			console.log('memo after callback: ', memo);
		}
		return memo;
	}
}

var result = _.map([1,2,3], function(num){ return num * num })
var result2 = _.reduce([100,22,30000], function(memo, num){ return memo + num })
console.log(result2);
console.log(result);