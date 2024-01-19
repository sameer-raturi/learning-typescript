class Department {
  private readonly id: string;
  name: string;
  private employees: string[] = [];
  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }
  // tip : when using the this inside the functions
  // try using regular functions instead of the arrow functions
  describe(this: Department) {
    console.log(this.name);
  }
  addEmployee(name: string) {
    this.employees.push(name);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

const accountingObj1 = new Department("1", "Accounting");
accountingObj1.describe();

accountingObj1.addEmployee("Sameer");
accountingObj1.addEmployee("Aditya");
accountingObj1.printEmployeeInformation();
// const accountingObj2 = {describe : accountingObj1.describe};
// accountingObj2.describe();
// const accountingObj3 = {name:'s', describe : accountingObj1.describe};
// accountingObj3.describe();
