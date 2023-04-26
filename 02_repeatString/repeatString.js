const repeatString = function(string, repeats) {
    let str_end = ''
    if (repeats < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < repeats; i++) {
        str_end += string
    }
    return str_end
}

// Do not edit below this line
module.exports = repeatString;
