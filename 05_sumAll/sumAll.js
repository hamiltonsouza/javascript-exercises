const sumAll = function(initialNumber,finalNumber) {

    let sum = 0;

    if (initialNumber < 0 ||
        finalNumber < 0 ||
        !Number.isInteger(initialNumber) ||
        !Number.isInteger(finalNumber)) {
        return 'ERROR';
    }

    if (initialNumber > finalNumber) {
        let numberPlaceholder = initialNumber;
        initialNumber = finalNumber;
        finalNumber = numberPlaceholder;
    }

    for (let i = initialNumber; i <= finalNumber; i++) {
        sum = sum + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
