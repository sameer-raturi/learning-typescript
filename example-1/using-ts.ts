const input1 = document.getElementsByTagName("input")[0];
const input2 = document.getElementsByTagName("input")[1];
const button = document.getElementsByTagName("button")[0];

// if it was a normal js file then we will have to do error handling as the input element will return string

const handleSum = (num1: number, num2: number) => {
  return num1 + num2;
};

button.addEventListener("click", () => {
  // handleSum(+input1.value, +input2.value);
  console.log({
    input1: input1.value,
    input2: input2.value,
    // as we have defined the argumet type as number we will have to type conversion over here
    sum: handleSum(+input1.value, +input2.value),
  });
});
