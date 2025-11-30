function leapYears(year) {
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
    
};

function leapYears(year) {
return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
// Do not edit below this line
module.exports = leapYears;
