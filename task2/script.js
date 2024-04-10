function getNextNumber(num) {
    var sum = 0;
    while (num > 0) {
        var digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
function isHappyNumber(n) {
    var seenNumbers = new Set();
    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = getNextNumber(n);
    }
    return n === 1;
}
// Примеры использования
console.log(isHappyNumber(19)); // Вывод: true
console.log(isHappyNumber(2)); // Вывод: false
