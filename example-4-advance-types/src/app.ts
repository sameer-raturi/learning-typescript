// Intersection types

type Combinable = string | number;
type Numeric = number | boolean;

// in case of basic types it will take normal intersection of the types
// here it will be Universal will be of type number
type Universal = Combinable & Numeric;

interface Admin {
  name: string;
  privilages: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}
// in case of the objects it will add all the properties
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "sameer",
  privilages: ["can code well"],
  startDate: new Date(),
};

// type guards
// checking the type in runtime so that we don't lead to abnormality(like accessing something from undefine )
type UnknownEmployee = Admin | Employee;
const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log("name : ", emp.name);
  if ("privilages" in emp) {
    console.log("privilages are ", emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("start time of ", emp.name, " is ", emp.startDate);
  }
};

printEmployeeInformation({ name: "sameer", privilages: ["can code well"] });
printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("car driving...");
  }
}
class Truck {
  drive() {
    console.log("Truck driving...");
  }
  loadCargo(cargoAmount: number) {
    console.log("loading cargo...", cargoAmount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// discriminated Unions
// we add the type to discriminate b/w the types in unions
interface Horse {
  // literal data type
  type: "horse";
  runningSpeed: number;
}
interface Bird {
  // literal data type
  type: "bird";
  flyingSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
      break;
  }
  console.log(`moving with the speed of ${speed}`);
}

// typecasting using as
const userInput = document.getElementById("user-input")! as HTMLInputElement;

interface ErrorContainer {
  // index properties it will be use when we don't know the which and how many properties will can be added to an object
  // but we know (in this example) the key should be of type string and the value should be of type string
  [prop: string]: string;
}

const ErrorBag: ErrorContainer = {
  username: "please enter correct name",
  email: "please enter correct email id",
};

// we can do function overloading to show the return type of the function in typescript
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: number, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add("sameer", " raturi");
const splittedResult = result.split(" ");

console.log(splittedResult);