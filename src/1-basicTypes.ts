export const basicTypes = () => {
  /* Basic types */
  // const someBoolean: boolean = false;
  // console.log('someBoolean', someBoolean);

  // /* Type inference */
  // const otherBoolean = true;
  // console.log('otherBoolean', otherBoolean);

  // const age: number = 29;
  // let personName = 'Wadusname';
  // personName = 'Menganico';
  // // personName = 3;

  // const phrase: string = `My name is ${personName} and my age ${age}`;
  // console.log(phrase);

  // /* Arrays */
  // const someArray: number[] = [1, 2, 3] ;
  // // const someArray2: number[] = [1, 2, 'a'] ;
  // console.log('someArray', someArray);

  // /* Tuples */
  // let tuple: [string, number];

  // tuple = [personName, age];
  // // console.log(tuple[0].toLocaleUpperCase());

  // // tuple[2] = 'something else';
  // // tuple[3] = 'hola';
  // console.log('tuple', tuple);

  // /* Enums */
  // enum ButtonSize {Small, Medium, Large}
  // let myButtonSize: ButtonSize;
  // myButtonSize = ButtonSize.Small;

  // console.log('myButtonSize', myButtonSize);
  // console.log('myButtonSize name', ButtonSize[myButtonSize]);

  // /* Any */
  // // tslint:disable-next-line
  // let something: any;
  // something = 'some string';

  // // Type assertions (type casting)
  // const someString: string = (something as string);
  // console.log(someString.trim());
  // console.log(something.trim());

  // /* Unknown */
  // // const otherThing: unknown = 'hola';
  // // console.log(otherThing.trim());

  // /* Union types */
  // let age2: string | number;
  // age2 = 30;
  // age2 = 'thirty';
  // console.log(age2);

  // /* functions */
  // const someFunction = (param1: string): number => {
    // return param1.length;
  // };
  // console.log(someFunction('hola'));

  /** returns string length */
  // function functionWithOverload(param1: string): number;
  // /** returns the passed number */
  // function functionWithOverload(param1: number): number;
  // function functionWithOverload(param1: string | number ) {
  //   if (typeof param1 === 'string') {
  //     return param1.length;
  //   }
  //   return param1;
  // }
  // functionWithOverload();

// const otherFunction = (param1: string, param2?: string) => {
//     console.log(param1, param2);
//   };
// console.log(otherFunction('hola'));

  // const myFunction = (someVar: string | number) => {
  //   // return someVar.trim();
  // };

  // console.log(myFunction('hola'));

  // function functionWithSpreadParams(param1: number, ...args: [string, string]): void;
  // function functionWithSpreadParams(param1: number, ...args: [string, string, string]): void;
  // function functionWithSpreadParams (param1: number, ...args: string[]) {
  //  console.log(param1, args);
  // }
  // functionWithSpreadParams(23, 'hola', 'adios');
};
