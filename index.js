'use strict';

module.exports = {
	findMissing: (arr1,arr2) =>{
	let bigArray = [];
  	let smallArray = [];
  	//if either array is emptry 
  	if (arr1.length === 0 || arr2.length === 0) return 0;
  	// if arrays are the same
  	else if (arr1.length==arr2.length) return 0;
  	//arranges array properly
  	else if (arr1.length > arr2.length){
    	bigArray = arr1;
    	smallArray = arr2;
  	}
  	else{
    	bigArray=arr2;
    	smallArray=arr1;
  	}
  	//checks if each bigArray element can be found in smallArray
  for (let i = 0 ; i<bigArray.length;i++){
    let position = smallArray.indexOf(bigArray[i]);
    if (position === -1) return bigArray[i];
    }
	}
}