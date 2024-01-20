abstract class Department {
  private readonly id: string;
  name: string;
  // the direct extends of this class can access the employees property
  protected employees: string[] = [];
  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }
  static createEmployee(name: string) {
    return { name };
  }

  // tip : when using the this inside the functions
  // try using regular functions instead of the arrow functions
  abstract describe(this: Department): void;
  addEmployee(name: string) {
    this.employees.push(name);
  }

  printEmployeeInformation() {
    console.log(this.employees, this.id);
  }
}
// if the class is abstract then we can't create the object of it.
// const accountingObj1 = new Department("1", "Accounting");
// accountingObj1.describe();

// accountingObj1.addEmployee("Sameer");
// accountingObj1.addEmployee("Aditya");
// accountingObj1.printEmployeeInformation();
// const accountingObj2 = {describe : accountingObj1.describe};
// accountingObj2.describe();
// const accountingObj3 = {name:'s', describe : accountingObj1.describe};
// accountingObj3.describe();

class ITDepartment extends Department {
  // if we use public private modifiers in the argument then it will declare new variable right their
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(this: Department): void {
    console.log(this);
  }
}

const itDepartmentObj = new ITDepartment("2", ["Sameer"]);
console.log(itDepartmentObj);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  get mostRecentReport() {
    if (this.reports.length > 0) {
      return this.reports.at(-1) as string;
    }

    throw new Error("no reports found");
  }

  set mostRecentReport(report: string) {
    if (report.length > 0) this.addReport(report);
  }

  // function overriding
  addEmployee(name: string) {
    if (name === "Max") return;
    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReport() {
    console.log(this.reports);
  }
  describe(this: Department): void {
    console.log(this);
    
  }
}

const accountingDepartmentObj = new AccountingDepartment("1", ["boom"]);
console.log(accountingDepartmentObj);
console.log(accountingDepartmentObj.mostRecentReport);
accountingDepartmentObj.mostRecentReport = "something went wrong";
accountingDepartmentObj.printReport();


const employee = Department.createEmployee("sameer");
console.log(employee);
