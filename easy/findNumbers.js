const array = [555,901,482,1771];

const findNumbers = (array) => {
	let count = 0;
	
	for(let i=0; i<array.length; i++) {
		let num = '' + array[i];
		if(num.length % 2 == 0) {
			count++
		}
	}
	
	return count
}

console.log(findNumbers(array));
			