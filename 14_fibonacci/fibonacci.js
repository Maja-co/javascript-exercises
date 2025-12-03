const fibonacci = function(n) {
  // 1. Hvis n kommer som en streng ("4"), lav det til et tal
  let count = Number(n);

  // 2. Tjek for fejl (man kan ikke bede om det minus-fjerde tal)
  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  // 3. Start listen med de to første tal
  let fibArray = [1, 1];

  // 4. Kør et loop indtil vi har nok tal
  // Vi starter fra 2, fordi vi allerede har lagt 0 og 1 i listen
  for (let i = 2; i < count; i++) {
    // Det nye tal er summen af de to foregående
    let nextNumber = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextNumber);
  }

  // 5. Returner det sidste tal i rækken
  return fibArray[count - 1];
};

module.exports = fibonacci;

// Do not edit below this line
module.exports = fibonacci;
