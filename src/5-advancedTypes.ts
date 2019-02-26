import { number } from 'prop-types';

// interface Map {
//   [key: string]: string;
// }

// interface A {
//   some: string;
// }

// interface B {
//   other: number;
// }

// interface C extends A, B {
//   third?: string;
//   fourth: string | null;
// }
// type C = A & B;

// type Color = 'yellow' | 'blue' | 'brown';

// interface Person {
//   name: string;
//   age: number;
//   address?: string;
//   readonly dni: string;
// }

// interface Plumber {
//   plumb: () => string;
// }

// interface Electricist {
//   plug: () => number;
//   unplug: () => number;
// }

// interface PersonWithProffesion<TProfession> extends Person {
//   labors: {
//     [K in keyof TProfession]: TProfession[K];
//   };
// }

// interface Strategy<TSelectors extends  {} = {}> {
//   name: string;
//   selectors: TSelectors;
// }

// interface ConcreSelectors {
//   someSelector: () => number;
// }

// type ConcreteStrategy = Strategy<ConcreSelectors>;

// type SelectorsOfStrategy<TStrategy extends Strategy> = {
//   [K in keyof TStrategy['selectors']]?: TStrategy['selectors'][K]
// };

// class RemoteEntity<TStrategy extends Strategy> {
//   public strategy: TStrategy;

//   constructor(strategy: TStrategy) {
//     this.strategy = strategy;
//   }

//   public selectors(): SelectorsOfStrategy<TStrategy>  {
//     return this.strategy.selectors;
//   }
// }

export const advancedTypes = () => {

  // const map: Map = { some: 'value' };
  // console.log(map);

  // const map2: Record<string, string> = { some: 'value' };
  // console.log(map2);

  // const myThing: A & B = { some: 'value', other: 2 };
  // console.log(myThing);

  // const myThing2: C = { some: 'value', other: 3, };
  // console.log(myThing2);

  // const partialC: Partial<C> = {};

  // const myColor: Color = 'yellow';
  // console.log(myColor);

  // const person: Person = {  name: 'Perico', age: 45, dni: '111' };

  // const getProperty = ( p: Person, property: string) => {
  //   return person[property];
  // };

  // const myProperty = getProperty(person, 'propiedad que no existe');
  // console.log(myProperty);

  // const betterGetProperty = <TObject, TProperty extends keyof TObject>(someObject: TObject, property: TProperty ) => {
  //   return someObject[property];
  // };

  // betterGetProperty(person, 'age');

  // const personPlumber: PersonWithProffesion<Plumber> = {
  //   name: 'Perico', age: 45, dni: '111', labors: { plumb: () => 'plumbing'  }
  // };
  // console.log(personPlumber);

  // const personElectricist: PersonWithProffesion<Electricist> = {
  //   name: 'Perico', age: 45, dni: '111', labors: { plug: () => 3, unplug: () => 4  }
  // };
  // console.log(personElectricist);

  // const concreteStrategy: ConcreteStrategy = { name: 'myStrategy', selectors: { someSelector: () => 23 }  };

  // const re = new RemoteEntity(concreteStrategy);
  // re.selectors().someSelector!();

};
