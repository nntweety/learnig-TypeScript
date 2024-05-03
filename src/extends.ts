export{}

class Animal{
  constructor(public name: string){}
  run(): string{
    return 'I can run!'
  }
}

class Lion extends Animal{
  public speed: number
  constructor(name: string, speed: number){
    super(name);
    this.speed = speed;
  }
  run(): string{
    const parentMessage = super.run();
    return `${this.name} ${parentMessage} ${this.speed} km/h`
  }
}

let rabbit = new Animal('Piter-rabbit')
let lion = new Lion('Symba', 80)

console.log(rabbit.run())
console.log(lion.run())