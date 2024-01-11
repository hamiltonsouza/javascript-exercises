const removeFromArray = function(originalArray,firstIndexToRemove,secondIndexToRemove) {
    if (secondIndexToRemove != false && secondIndexToRemove > -1) {
        originalArray.splice(firstIndexToRemove - 1,1);
        originalArray.splice(secondIndexToRemove - 1,1);
        return originalArray;
    } else {
        originalArray.splice(firstIndexToRemove - 1,1);
        return originalArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
