function getNextNumber(num: number): number {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isHappyNumber(n: number): boolean {
    const seenNumbers = new Set<number>();
    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = getNextNumber(n);
    }
    return n === 1;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(2));