const calculateSum = (n1: number, n2: number): number => {
  return n1 + n2;
};

calculateSum(3, 5);

const printResult = (num: number): void => {
  console.log(num);
};

printResult(3);

// using Function type
let combineValues: Function;

combineValues = calculateSum;
combineValues(3, 5);
// assignment is possible bcz calculateSum and printResult both satisfy as Function type
combineValues = printResult;
combineValues(3, 4);

let combineValues2: (a: number, b: number) => number;

combineValues2 = calculateSum;
combineValues2(3, 5);
// assignment is not possible bcz  printResult don't satisfy the given specific function type
// combineValues2 = printResult;
// combineValues2(3,4);

const addAndHandle = (n1: number, n2: number, cb: (a: number) => void) => {
  cb(n1 + n2);
};

addAndHandle(11, 5, printResult);
