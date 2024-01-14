var input1 = document.getElementsByTagName("input")[0];
var input2 = document.getElementsByTagName("input")[1];
var button = document.getElementsByTagName("button")[0];
// if it was a normal js file then we will have to do error handling as the input element will return string
var handleSum = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    // handleSum(+input1.value, +input2.value);
    console.log({
        input1: input1.value,
        input2: input2.value,
        // as we have defined the argumet type as number we will have to type conversion over here
        sum: handleSum(+input1.value, +input2.value),
    });
});
var person = {
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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person2 = {
    name: "sameer",
    age: 30,
    hobbies: ["Swimming", "Gaming"],
    role: Role.AUTHOR,
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // hobby.map(); typescript compiler will throw the error here as we it already knows hobby is a string
    // and it doesn't have map functionality
}
console.log(person2);
