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