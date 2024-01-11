const removeFromArray = function(originalArray,indexToRemove) {
    originalArray.splice(indexToRemove - 1, 1);
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
