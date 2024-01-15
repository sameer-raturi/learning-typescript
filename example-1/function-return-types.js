var calculateSum = function (n1, n2) {
    return n1 + n2;
};
calculateSum(3, 5);
var printResult = function (num) {
    console.log(num);
};
printResult(3);
// using Function type
var combineValues;
combineValues = calculateSum;
combineValues(3, 5);
// assignment is possible bcz calculateSum and printResult both satisfy as Function type
combineValues = printResult;
combineValues(3, 4);
var combineValues2;
combineValues2 = calculateSum;
combineValues2(3, 5);
// assignment is not possible bcz  printResult don't satisfy the given specific function type
// combineValues2 = printResult;
// combineValues2(3,4);
var addAndHandle = function (n1, n2, cb) {
    cb(n1 + n2);
};
addAndHandle(11, 5, printResult);
