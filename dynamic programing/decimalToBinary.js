const decimalToBinary = (num) => {
    if(num >= 1) {
        if(num %2) {
            return decimalToBinary((num-1)/2) + 1;
        } else {
            return decimalToBinary(num/2) + 0;
        }
    } else {
        return ""
    }
}

console.log(decimalToBinary(15))

const binaryToDecimal = (binary) => {
    let decimal = 0;
    binary = String(binary);
    let length = binary.length-1;
    for(let i=0; i<binary.length; i++) {
        decimal = decimal + binary[i] * Math.pow(2, length);
        length--;
    }
    return decimal;
}

console.log(binaryToDecimal(0001))