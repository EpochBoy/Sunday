// Write a function which checks if the same amount of 'd' and 'k' is in the string.
//
// Examples:
// same("ddkk") => true
// same("dkkdd") => false
// same("ddkKm") => true
// same("dmm") => false
// same("eSss") => true // when no 'd' and 'k' is present should return true


export function same(str:string) {

    const strLength = str.length;

    if(strLength < 1){
        return false;
    }

    let dcount:number = 0;
    let kcount:number = 0;
    
    // This isn't agnostic to capitalization
    // for (let i = 0; i < strLength; i++) {
    //     let char = str.charAt(i);
    //     if(char === 'd'){
    //         dcount++;
    //     }else if(char === 'k'){
    //         kcount++;
    //     }
    // }
    
    const daccept = ['d','D'];
    const kaccept = ['k','K'];
    const dacceptLength = daccept.length;
    const kacceptLength = kaccept.length;

    for (let i = 0; i < strLength; i++) {
            var char = str[i];
            for (let i = 0; i < dacceptLength; i++) {
                let acpt = daccept[i];
                if(char === acpt){
                    dcount++;
                }
                }
            for (let i = 0; i < kacceptLength; i++) {
                let acpt = kaccept[i];
                if(char === acpt){
                    kcount++;
                }
            }
        }

    if(dcount === kcount){
        return true;
    }else{
        return false;
    }
}


console.log(same("ddkk"));
console.log(same("dkkdd"));
console.log(same("ddkKm"));
console.log(same("dmm"));
console.log(same("eSss"));






