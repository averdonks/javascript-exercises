const fibonacci = function(max) {
    let oneSumAgo = 0;
    let twoSumsAgo = 0;
    let fibonacciNum = 0;

    if (Number(max) < 0) {
        fibonacciNum = "OOPS";
    }

    for (let i = 0; i <= Number(max); i++) {
        if (Number(max) === 0) {
            break;
        } else if (i === 1) {
            oneSumAgo = 1;
            twoSumsAgo = 0;
            fibonacciNum = oneSumAgo + twoSumsAgo;
        } else {
            fibonacciNum = oneSumAgo + twoSumsAgo;
            twoSumsAgo = oneSumAgo;
            oneSumAgo = fibonacciNum;
        }
    }

    return fibonacciNum;
};

// Do not edit below this line
module.exports = fibonacci;
