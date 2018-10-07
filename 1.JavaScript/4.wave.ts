// Your task is to create a wave pattern out of a string.
//
// Rules:
// 1. The input will always be lower case string.
// 2. Ignore whitespace.
//
// Examples:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave (" h e y ") => [" H e y ", " h E y ", " h e Y "]
// wave ("") => []
// export function wave(str:string) {

var wave = (inp: string): string[] => {
    const result: string[] = [];
    const inpSplit = inp.split("");
    const inpLength = inpSplit.length;


    for (let i = 0; i < inpLength; i++) {
        if (inp[i] === " ")
            continue;
        let copy = inpSplit.slice(0);
        copy[i] = copy[i].toUpperCase();        
        result.push(copy.join(""));
    }

    return result;
}

var result1 = wave("hello");
var result2 = wave(" h e y ");
var result3 = wave("");

console.log(result1);
console.log(result2);
console.log(result3);

console.log(result1, (result1[0] === "Hello" && result1[1] === "hEllo" && result1[2] === "heLlo" && result1[3] === "helLo" && result1[4] === "hellO"));
console.log(result2, (result2[0] === " H e y " && result2[1] === " h E y " && result2[2] === " h e Y "));
console.log(result3, result3.length === 0);