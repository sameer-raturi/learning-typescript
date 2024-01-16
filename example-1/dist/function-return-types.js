"use strict";
const calculateSum = (n1, n2) => {
    return n1 + n2;
};
calculateSum(3, 5);
const printResult = (num) => {
    console.log(num);
};
printResult(3);
let combineValues;
combineValues = calculateSum;
combineValues(3, 5);
combineValues = printResult;
combineValues(3, 4);
let combineValues2;
combineValues2 = calculateSum;
combineValues2(3, 5);
const addAndHandle = (n1, n2, cb) => {
    cb(n1 + n2);
};
addAndHandle(11, 5, printResult);
//# sourceMappingURL=function-return-types.js.map