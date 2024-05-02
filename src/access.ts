export{}
class Pearson{
  //メンバ変数
  protected name: string;
  age: number;
  protected nationality: string
  constructor(name: string, age: number, nationality: string){
    this.name = name
    this.age = age
    this.nationality = nationality
  }
  profile(): string{
    return `name: ${this.name}, age:${this.age}`;
  }

  getName(): string{
    return this.name
  }
}

class Android extends Pearson{
  constructor(name: string, age: number, nationality: string){
    super(name, age, nationality)
  }

  profile(): string{
    return `name: ${this.name}, age:${this.age}, nationality:${this.nationality}`;
  }
}

let taro = new Android('taro', 34, 'Italy')
console.log(taro.getName())
console.log(taro.profile())