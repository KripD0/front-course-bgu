type Push<T extends unknown[], U> = [...T, U];

type Result = Push<[1, 2], "3">;

const arr1: Push<[1, 2], "3"> = [1, 2, '3'];
const arr2: Push<[string], number> = ['hello', 42];
console.log('Первый массив: ' + arr1)
console.log('Второй массив: ' + arr2)