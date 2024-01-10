const repeatString = function(stringToRepeat,numberOfTimes) {
    if (numberOfTimes >= 0) {
    return stringToRepeat.repeat(numberOfTimes);
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
