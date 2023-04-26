const sumAll = function(x, y) {
    if (x < 0 || y < 0){
        return 'ERROR'
    }
    else if (Number.isInteger(x) && Number.isInteger(y)){
        if ( x > y) {
            let sum = 0
            for (let i = y; i <= x; i++) {
                sum += i
            }
            return sum
        }
        else {
            let sum = 0
            for (let i = x; i <= y; i++) {
                sum += i
            }
            return sum
        }
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
