// Write a function that takes the average of an array of number and returns the nearest whole number.
// Examples:
// number([1, 2]) => 2
// number([2, 4]) => 3
// number([23, 18, 1, 1, 1, 1]) => 8
// number([1, 2, 3, 4, 5]) => 3

export function number(numbers: number[]) {

    const numbersLength: number = numbers.length;
    let sum:number = 0;
    let count:number = 0;

    for (let i = 0; i < numbersLength; i++) {
        sum += numbers[i];
        count++;
        //console.log("I am dimsum:"+sum)
    }
    return Math.round(sum/count);
}

console.log(number([1,2]));
console.log(number([2,4]));
console.log(number([23, 18, 1, 1, 1, 1]));
console.log(number([1, 2, 3, 4, 5]));


