"use strict";
const input1 = document.getElementsByTagName("input")[0];
const input2 = document.getElementsByTagName("input")[1];
const button = document.getElementsByTagName("button")[0];
const handleSum = (num1, num2) => {
    return num1 + num2;
};
button.addEventListener("click", () => {
    console.log({
        input1: input1.value,
        input2: input2.value,
        sum: handleSum(+input1.value, +input2.value),
    });
});
const person = {
    name: "sameer",
    age: 30,
    hobbies: ["Swimming", "Gaming"],
    role: [2, "author"],
};
person.role = [1, "king"];
person.role.push("user");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person2 = {
    name: "sameer",
    age: 30,
    hobbies: ["Swimming", "Gaming"],
    role: Role.AUTHOR,
};
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person2);
//# sourceMappingURL=using-ts.js.map