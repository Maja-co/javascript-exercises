repeatString('hey', 3)

function repeatString(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
     let result = "";
    while (num > 0) {
        result += string;
    }
    return result;
}


// Do not edit below this line
module.exports = repeatString;
