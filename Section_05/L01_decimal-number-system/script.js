
const digits = [2, 6, 3, 9];
const number = 2 * Math.pow(10, 0) + 6 * Math.pow(10, 1) + 3 * Math.pow(10, 2) + 9 * Math.pow(10, 3);
// console.log(number)

// Task is to create a Number form an array
// the challenge is - the last value of array should be the first digit of the output number..  
const createNumber = (Numbers) => {
    let output = 0;
    for (let i = 0; i < Numbers.length; i++) {
        output += Numbers[i] * Math.pow(10, i);
    };
    return output;
}

// using forEach loop
const newNumber = (array, radix = 10) => {
    const hexValues = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

    let num = 0;
    if (radix === 16) {
        const newArray = array.map((item) => {
            if (typeof item === 'string' && hexValues.hasOwnProperty(item.toLocaleLowerCase())) {
                return hexValues[item.toLocaleLowerCase()];
            } else {
                return item;
            }
        })

        newArray.forEach((digit, index) => {
            num += digit * Math.pow(radix, index);
        });
        return num;
    } else {
        array.forEach((digit, index) => {
            num += digit * Math.pow(radix, index);
        });
        return num;
    }
}

// console.log(createNumber([2, 6, 3, 9, 19])) // output = 59362;
// console.log(newNumber([2, 6, 3, 7, 5, 'a'], 16)) // decimal to hex
console.log(newNumber(['F', 'F', 'F'], 16)) // decimal to hex
/* 
input = [2, 6, 3, 9];

// 1st iteration 
= Numbers[Numbers.length - (i + 1)] * Math.pow(10, Numbers.length - (i + 1));
= Numbers[4 - 0 + 1] * Math.pow(10, 4 - 0 + 1);
= Numbers[4 - 1] * Math.pow(10, 4 - 1);
= Numbers[3] * Math.pow(10, 3);
= 9 * 1000;
output = 9000;

// 2end iteration 
= Numbers[Numbers.length - (i + 1)] * Math.pow(10, Numbers.length - (i + 1));
= Numbers[4 - (1 + 1)] * Math.pow(10, 4 - (1 + 1));
= Numbers[4 - 2] * Math.pow(10, 4 - 2);
= Numbers[2] * Math.pow(10, 2);
= 3 * 100;
= 300;
output = 9300;

// 3rd iteration 
= Numbers[Numbers.length - (i + 1)] * Math.pow(10, Numbers.length - (i + 1));
= Numbers[4 - (2 + 1)] * Math.pow(10, 4 - (2 + 1));
= Numbers[4 - 3] * Math.pow(10, 4 - 3);
= Numbers[1] * Math.pow(10, 1);
= 6 * 10;
= 60;
output = 9360;

// 4th iteration 
= Numbers[Numbers.length - (i + 1)] * Math.pow(10, Numbers.length - (i + 1));
= Numbers[4 - (3 + 1)] * Math.pow(10, 4 - (3 + 1));
= Numbers[4 - 4] * Math.pow(10, 4 - 4);
= Numbers[0] * Math.pow(10, 0);
= 2 * 1;
= 2;
output = 9362;

*/