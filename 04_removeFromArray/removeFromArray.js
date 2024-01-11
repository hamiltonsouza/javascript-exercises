const removeFromArray = function(originalArray, ...itemsToRemove) {
    const newArray = [];    
    originalArray.forEach((item) => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
