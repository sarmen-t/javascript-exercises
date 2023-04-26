const reverseString = function(string) {
    let str_end = ''
    for (let i = string.length - 1; i >= 0; i--) {
        str_end += string[i]
    }
    return str_end
};

// Do not edit below this line
module.exports = reverseString;
