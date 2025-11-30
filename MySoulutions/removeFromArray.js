removeFromArray([1, 2, 3, 4], 3);
function removeFromArray(array, ...args) {
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
