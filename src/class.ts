export{}
class Pearson{
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  profile(): string{
    return `name: ${this.name}, age:${this.age}`;
  }
}

let taro = new Pearson('taro', 34)
console.log(taro.profile())