'use strict';

module.exports = {
	reverseString: (text) =>{
		if(text.length === 0){
			return null;
		}
		let arr = [];
		for (let i = text.length-1; i>=0; --i){
		//loop counts from right to left of string the array.
			arr += text[i];
		}
		let str = arr.toString();
		if (str === text){
			return true;
		}
		else return str;
	}
}