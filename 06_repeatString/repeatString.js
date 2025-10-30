const repeatString = function(str, num) {
    let text = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            text += str;
        }
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
