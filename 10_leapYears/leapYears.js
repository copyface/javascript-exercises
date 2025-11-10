const leapYears = function(year) {
    const leapYear = year % 4 === 0;
    const leapYear2 = year % 400 === 0;
    const notLeapYear = year % 100 === 0;
    if (leapYear && (leapYear2|| !notLeapYear)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
