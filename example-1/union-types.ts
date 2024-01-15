type Combinable = number | string;
type ResultTypes = "as-text" | "as-number";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultType: ResultTypes,
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    // below if don't work
    // if(typeof input1 ===  typeof input2) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(combine("sameer", "raturi", "as-text"));
console.log(combine(3, 5, "as-number"));
console.log(combine("3", "5", "as-number"));
