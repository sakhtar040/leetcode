const largestPrimeFactor = (N) => {
    let primeFactor = 0;
    while(N%2 === 0) {
        N = Math.floor(N/2);
    }

    primeFactor = N < 2 ? 2 : N;

    for(let i=3; i<=Math.floor(Math.sqrt(N)); i=i+2) {
        while(N%i === 0) {
            N=Math.floor(N/i);
        }
        primeFactor = N < i ? i : N;
    }

    return primeFactor;
}

console.log(largestPrimeFactor(64))