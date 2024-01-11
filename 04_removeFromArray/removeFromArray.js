const removeFromArray = function(originalArray,firstItemToRemove,secondItemToRemove,thirdItemToRemove,fourthItemToRemove) {
    let firstIndexToRemove = originalArray.indexOf(firstItemToRemove);
    let secondIndexToRemove = originalArray.indexOf(secondItemToRemove);
    let thirdIndexToRemove = originalArray.indexOf(thirdItemToRemove);
    let fourthIndexToRemove = originalArray.indexOf(fourthItemToRemove);
    const indexesToRemove = [firstIndexToRemove,secondIndexToRemove,thirdIndexToRemove,fourthIndexToRemove];
    indexesToRemove.sort((a, b) => b - a);
    for (let index of indexesToRemove) {
        if (index > -1){
            originalArray.splice(index,1);
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
