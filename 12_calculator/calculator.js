function add(a, b) {
	return a + b
};

function subtract(a, b) {
	return a - b
};

function sum() {
  return array.reduce((total, current) => total + current, 0);
};

function multiply(array) {
  // Bruger reduce, men starter med 1 (fordi man ikke kan gange med 0)
  return array.length ? array.reduce((total, current) => total * current, 1) : 0;
};

function power(base, exponent) {
  return Math.pow(base, exponent); 
}

function factorial(n) {
  if (n === 0) return 1; // Matematisk regel

  let product = 1;
  // Start fra 1 og gang op til n (eller start fra n og gang ned til 1)
  for (let i = 1; i <= n; i++) {
    product = product * i;
  }
  return product;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
