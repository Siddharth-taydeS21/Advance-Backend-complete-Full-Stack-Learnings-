// All mathematical functions exported as a module of functions 
function sum(...num){
    return num.reduce((acc, curVal) => acc + curVal)
}

function multiply(...num){
    return num.reduce((acc, curVal) => acc * curVal)
}

// first approach of exporting code using module.exports
// module.exports = {
//     sum, multiply
// }

// second approach of exporting code using module.exports
// module.exports.sum = sum;
// module.exports.multiply = multiply;

// third and advance approach of exporting code using only exports
exports.sum = sum;
exports.multiply = multiply;

// Error!! ... we are not using the exports prop of module object here,,
// this exports object is created by us, and not a built in module.exports object
// exports = {
//     sum,
//     multiply,
// }