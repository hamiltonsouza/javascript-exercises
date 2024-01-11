const removeFromArray = function(originalArray,
                                 firstItemToRemove,
                                 secondItemToRemove,
                                 thirdItemToRemove,
                                 fourthItemToRemove) {
    let firstIndexToRemove = originalArray.indexOf(firstItemToRemove);
    let secondIndexToRemove = originalArray.indexOf(secondItemToRemove);
    let thirdIndexToRemove = originalArray.indexOf(thirdItemToRemove);
    let fourthIndexToRemove = originalArray.indexOf(fourthItemToRemove);
    const indexesToRemove = [firstIndexToRemove,
                             secondIndexToRemove,
                             thirdIndexToRemove,
                             fourthIndexToRemove];
    indexesToRemove.sort((a, b) => b - a);
    for (let index of indexesToRemove) {
        if (index > -1){
            originalArray.splice(index,1);
        }
    }
    return originalArray;
};

// originally I didn't know about rest parameters, so I created this monstrosity
// that within four parameters results correctly, I figured there should be
// something to accept as many parameters as needed, but I didn't search for it.
// I was curious to see how the solution worked and if it solved this problem I
// had stumbled upon and lo and behold: exactly that. I was frustrated that I
// had not come across rest parameters and the .forEach() array method before
// but I overcame this feeling and was satisfied with the solution. at first I
// tried to implement this into my solution but once I analysed the TOP solution
// and understood how creating a new array instead of modifiying the original
// and not even needing to deal with its items indexes was better I found the
// solution so elegant that I was pleased in using it instead of my own.

// Do not edit below this line
module.exports = removeFromArray;
