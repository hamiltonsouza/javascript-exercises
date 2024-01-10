const reverseString = function(originalString) {

    let stringArray = originalString.split("");
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;

};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
