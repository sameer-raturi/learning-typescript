// below is a function which is returning the decorator function
function LoggerWithParams(logginStatement: string){
  return function Logger(constructor: Function){
    console.log(logginStatement);
    console.log(constructor);
  };
}

@LoggerWithParams("Logging person class");
class Person{
  name= 'Max';
  constructor(){
    console.log('Creating a object Person');
  }
}
