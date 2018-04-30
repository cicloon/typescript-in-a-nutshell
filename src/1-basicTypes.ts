export const basicTypes = () => {
  /* Basic types */
  const someBoolean: boolean = false;
  console.log('someBoolean', someBoolean);

  const age: number = 29;
  let personName = 'Wadusname';
  personName = 'Menganico';
  // personName = 3;
  // personName = 3;

  const phrase: string = `My name is ${personName} and my age ${age}`;
  console.log(phrase);

  /* Arrays */
  const someArray: number[] = [1, 2, 3] ;
  const someArray2: number[] = [1, 2, 3] ;
  console.log('someArray', someArray);

  /* Tuples */
  let tuple: [string, number];

  tuple = [personName, age];
  // console.log(tuple[0].toLocaleUpperCase());

  tuple[2] = 'something else';
  tuple[3] = 'hola';
  console.log('tuple', tuple);

  /* Enums */
  enum ButtonSize {Small, Medium, Large}
  let myButtonSize: ButtonSize;
  myButtonSize = ButtonSize.Small;

  console.log('myButtonSize', myButtonSize);
  console.log('myButtonSize name', ButtonSize[myButtonSize]);

  /* Any */
  // tslint:disable-next-line
  const something: any = '23';

  // Type assertions (type casting)
  const someString: string = (something as string);
  console.log(someString);

  /* Union types */
  let age2: string | number;
  age2 = 30;
  age2 = 'thirty';
  console.log(age2);

};
