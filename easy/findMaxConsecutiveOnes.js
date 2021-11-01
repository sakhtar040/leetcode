const array = [1,0,1,1,0,1];

const findMaxConsecutiveOnes = (array) => {
	if (null == array){
        return 0;
    }
    let count = 0;
	let max = 0 ;
	for(let i=0; i<array.length; i++) {
		if(array[i] == 1) {
			count++
		} else {
			if(count > max){
                max = count;
            }
			count = 0;
		}
	}
	max = count > max ? count : max;
	return max;
}

console.log(findMaxConsecutiveOnes(array))