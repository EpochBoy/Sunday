// Write a function which
//     Multiplies each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.
//     Example
// math(65, 60, 75, 55, 60, 63, 64, 45) === 86

export function math(...numbers) {
    
    let secondExponent:number = 0;

    numbers.forEach(element => {
        secondExponent += element * element;
    });

    // I just had to test before rounding here due to differing results. The result is === 86.84037079607617 so if rounded result should be 87 and not 86.
    // console.log(Math.sqrt(secondExponent)/2);
    
    // This is what i would do.
    let result = Math.round(Math.sqrt(secondExponent)/2);

    // Trunc throws a compilation error, I decided to use floor instead.
    // var resultCorrect = Math.trunc(Math.sqrt(secondExponent)/2); 

    // This gives the desired result.
    let resultCorrect = Math.floor(Math.sqrt(secondExponent)/2);

    console.log("I've been rounded: "+result);
    console.log("I've been truncated/floored: "+resultCorrect);
    
}

math(65, 60, 75, 55, 60, 63, 64, 45);