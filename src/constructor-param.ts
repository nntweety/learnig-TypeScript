export{}

class Person{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age =age;
  };
}

let Taro = new Person('Aska', 17);
console.log(Taro);

type Ptype = typeof Person;

type pro = ConstructorParameters<Ptype>;

const test: pro = ['Taki', 25];
const test2 = new Person(...test)

