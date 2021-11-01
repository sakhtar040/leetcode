const uglyNumber = (n) => {
    let count = 2;
    while(n >= count) {
        if(count % 2 === 0) {
            if(count % 3 === 0) {
                if(count % 5 === 0) {
                    count ++;
                } else {
                    count++
                }
            }

            if(count % 5 === 0) {
                count++
            }
        }
    }
}

const isUgly = (num) => {

}

console.log(uglyNumber(7));