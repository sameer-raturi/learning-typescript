// use to define type for the objects
interface Named {
  // we don't have publi, private,... but we have readonly modifier in interface
  //  ? means its an optional property if its not initialize it will hold undefined value
  readonly name?: string;
}

// we can extends multiple interfaces in normal classes this wouldn't have been possible
interface Greetable extends Named {
  greet(phrase: string): void;
}

// the class can implements multiple interfaces but the extends of multiple class is not allowed
class Person implements Greetable {
  name?: string;
  age: number;
  constructor(n: string, age: number) {
    if(n){
      this.name = n;
    }
    this.age = age;
  }
  greet(name: string): void {
    console.log(`${this.name} greets ${name}`);
  }
}

let user1: Greetable;

user1 = {
  name: "sameer",
  greet(name: string) {
    console.log(`${this.name} greets ${name}`);
  },
};
console.log(user1);

let user2 = new Person("Kunal", 27);
console.log(user2);
user2.greet("sameer");


// here as function is internally an object so we can create interface for function as well
interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
