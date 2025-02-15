const sumAll = function(num1, num2) {
    let largerNum = 0;
    let smallerNum = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        largerNum = num1;
        smallerNum = num2;
    } else {
        largerNum = num2;
        smallerNum = num1;
    }

    let sum = 0;
    while (smallerNum <= largerNum) {
        sum += smallerNum;
        smallerNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
