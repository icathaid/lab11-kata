'use strict'
function cubeOdd(arr){
    console.log(arr);
    let bill = arr.filter(thing1 => Number.isInteger(thing1))
    if (bill.includes(null) || bill.length < 1){
        return undefined;
    };
    if(bill.length === arr.length){
        let ted = bill.filter(thing2 => !Number.isInteger(thing2/2))
        .map(thing3 => Math.pow(thing3, 3))
        .reduce((adder, whatItBe) => adder + whatItBe);
        return ted;
    };
    return undefined;
};