// below is a function which is returning the decorator function
function LoggerWithParamsa(logginStatement: string) {
  console.log("abc1");
  return function Logger(constructor: Function) {
    console.log(logginStatement);
    console.log(constructor);
  };
}

function WithTemplatea(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    const hookEl = document.getElementById(hookId);

    // the return of the function is an constuctor which will overwrite the original constructor
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        // const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@LoggerWithParamsa("Logging person class")
@WithTemplatea("<h2>Hey I'm Sameer</h2>", "app")
class Persona {
  name = "Max";
  constructor() {
    console.log("Creating a object Person");
  }
}

const Log1a = (...abc: any[]) => {
  console.log(abc);
};

const Log2a = (constructor: any, propertyName: string | symbol,  descriptor: PropertyDescriptor) => {
  console.log(constructor, propertyName,  descriptor);
};

const Log3a = (target: any, propertyName: string, positionOfArgument: number) => {
  console.log(target, propertyName, positionOfArgument);
};

class Producta {
  @Log1a
  title: string;
  @Log1a
  description: string;
  private _price: number;

  constructor(title: string, desc: string, price: number) {
    this.title = title;
    this.description = desc;
    this._price = price;
  }

  @Log2a
  set price(val: number){
    this._price = val;
  }

  @Log2a
  getPriceWithTax(@Log3a tax: number) {
    return this._price*(1+tax);
  }
}

// the arguments which we are not using can  start with _ inorder to remove the error
const AutoBind = (_target: any, _methodName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    enumerable: false,
    configurable: true,
    get(){
      console.log(this);
      // here we will be binding the original function with the this value of the original method
      //  we have set it in the getter function so whenever it is called with p.showMessage
      //  this getter function will get called
      return originalMethod.bind(this);
    }
  }
  return newDescriptor;
}

class Printer{
  message= "Hey Sameer!";

  @AutoBind
  showMessage(){
    console.log(this.message);
  }
}

const p = new Printer();
setTimeout(p.showMessage, 2000);



