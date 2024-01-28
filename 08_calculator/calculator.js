const add = function(firstTerm, secondTerm) {
	return (firstTerm + secondTerm);
};

const subtract = function(firstTerm, secondTerm) {
	return (firstTerm - secondTerm);
};

const sum = function(sumTerms) {
  let totalSum = 0;
  sumTerms.forEach((sumTerm) => totalSum += sumTerm);
  return totalSum;
};

const multiply = function(multiplicationFactors) {
  let multiplication = 1;
  multiplicationFactors.forEach((factor) => multiplication *= factor);
  return multiplication;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
