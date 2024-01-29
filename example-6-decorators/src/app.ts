// below is a function which is returning the decorator function
function LoggerWithParams(logginStatement: string) {
  console.log("abc1");
  return function Logger(constructor: Function) {
    console.log(logginStatement);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("abc2");
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    // const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@LoggerWithParams("Logging person class")
@WithTemplate("<h2>Hey I'm Sameer</h2>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating a object Person");
  }
}

const Log1 = (...abc: any[]) => {
  console.log(abc);
};

const Log2 = (constructor: any, propertyName: string | symbol,  descriptor: PropertyDescriptor) => {
  console.log(constructor, propertyName,  descriptor);
};

const Log3 = (target: any, propertyName: string, positionOfArgument: number) => {
  console.log(target, propertyName, positionOfArgument);
};

class Product {
  @Log1
  title: string;
  @Log1
  description: string;
  private _price: number;

  constructor(title: string, desc: string, price: number) {
    this.title = title;
    this.description = desc;
    this._price = price;
  }

  @Log2
  set price(val: number){
    this._price = val;
  }

  @Log2
  getPriceWithTax(@Log3 tax: number) {
    return this._price*(1+tax);
  }
}




