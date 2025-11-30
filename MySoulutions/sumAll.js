sumAll(1, 4)
function sumAll(min, max) {
// 1. Tjekker for fejl (skal være heltal og ikke-negative)
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    // 2. Bytter rundt hvis min er større end max
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    // 3. Udregner summen
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
