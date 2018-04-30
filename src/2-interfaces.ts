export const interfaces = () => {

  function presentation(person: {name: string, age: number}) {
    console.log(`My name is ${person.name} and my age is ${person.age}`);
  }

  // const person: {name: string, }
  presentation({name: 'Perico', age: 23});

  interface Person {
    name: string;
    age: number;
    address?: string;
    readonly dni: string;
  }

  function presentation2(person: Person) {
    console.log(`My name is ${person.name} and my age is ${person.age}`);
    if (person.address) {
      console.log(`I live in ${person.address}`);
    }

    // person.dni = 32;
  }

  const menganico: Person = { name: 'Menganico', age: 44, dni: '23353028W' };
  presentation2(menganico);

  // menganico.surname = 'Lopez';
  // interface Person {
  //   surname: string;
  // }

  interface PersonWithMoreFields extends Person {
    // tslint:disable-next-line no-any
    [propName: string]: any;
  }

  const menganico2: PersonWithMoreFields = menganico;
  menganico2.surname = 'Lopez';
  // presentation2(menganico2);

  interface BetterPerson extends PersonWithMoreFields {
    saySomething: () => void;
  }

  const menganico3: BetterPerson = {
    ...menganico, saySomething: () => { console.log('Hello!'); }
  };

  menganico3.saySomething();

  class MyPerson implements BetterPerson {
    public name: string;
    public age: number;
    public dni: string = '';

    constructor(name: string, age: number, dni?: string) {
      this.name = name;
      this.age = age;
      if (dni) {
        this.dni = dni;
      }
    }

    public saySomething() {
      console.log('ey!');
    }
  }

  const otherPerson = new MyPerson('perico', 54);
  presentation2(otherPerson);
};
