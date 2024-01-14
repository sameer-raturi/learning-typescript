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

const person: {
  name: string;
  age: number;
  // nickname: string;
  hobbies: string[];
  role: [number, string];
} = {
  name: "sameer",
  age: 30,
  hobbies: ["Swimming", "Gaming"],
  role: [2, "author"],
};

// ts will throw error in below 2
// we can't assign empty array
// person.role = [];
// simply due to type check
// person.role = ["1", "king"];
person.role = [1, "king"];
// we can't assign like this but we can push this is ts caveat
// person.role = [1, "king", "user"];
person.role.push("user");

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person2: {
  name: string;
  age: number;
  // nickname: string;
  hobbies: string[];
  role: Role;
} = {
  name: "sameer",
  age: 30,
  hobbies: ["Swimming", "Gaming"],
  role: Role.AUTHOR,
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map(); typescript compiler will throw the error here as we it already knows hobby is a string
  // and it doesn't have map functionality
}

console.log(person2);
