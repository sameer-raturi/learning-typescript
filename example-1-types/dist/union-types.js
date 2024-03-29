"use strict";
const combine = (input1, input2, resultType) => {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine("sameer", "raturi", "as-text"));
console.log(combine(3, 5, "as-number"));
console.log(combine("3", "5", "as-number"));
//# sourceMappingURL=union-types.js.map