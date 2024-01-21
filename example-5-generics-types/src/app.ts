// Code goes here!

// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promise generic type");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data.split(""));
// });

// here we are restricting the generic type to be object of any kind
// how this is better is bcz of the generic type the type of the object
// is being set at the time of function call due to which TS doesn't give
// the error while accessing the name or age variable
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj1 = merge({ name: "Sameer" }, { age: 23 });
console.log(mergedObj1.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let description = "Got no value";
  if (element.length === 1) {
    description = "Got 1 element";
  }
  if (element.length > 1) {
    description = "Got more than 1 elements";
  }
  return [element, description];
}

console.log(countAndDescribe("Sameer"));

console.log(countAndDescribe(["Sameer", "Kunal"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value is " + obj[key];
}

console.log(extractAndConvert({ name: "Sameer" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  displayItems() {
    console.log(this.data);
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Sameer");
textStorage.addItem("Raturi");
textStorage.addItem("Kunal");
textStorage.addItem("Raturi");

textStorage.displayItems();
textStorage.removeItem("Raturi");
textStorage.displayItems();
textStorage.removeItem("Raturi");
textStorage.displayItems();

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.addItem(4);
numberStorage.addItem(5);

numberStorage.displayItems();
numberStorage.removeItem(3);
numberStorage.displayItems();

const objectStorage = new DataStorage<object>();

objectStorage.addItem({ a: 1 });
objectStorage.addItem({ b: 2 });
objectStorage.addItem({ c: 3 });
objectStorage.addItem({ d: 4 });
objectStorage.addItem({ e: 5 });

objectStorage.displayItems();
// here the removeitem won't work because every time new object reference will be created
objectStorage.removeItem({ c: 3 });
objectStorage.displayItems();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function CreateCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("sameer");
// names.pop()