const sumAll = function(initialNumber,finalNumber) {

    let sum = 0;
    
    for (let i = initialNumber; i <= finalNumber; i++) {
        sum = sum + i;
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
