function Sum(...num){
    return num.reduce((acc, curVal) => acc + curVal, 0)
}

console.log('sum module is running...');

module.exports = Sum;