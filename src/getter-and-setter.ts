export{}

class MyNumberCard{  
  constructor(private _owner: string, private _secretNumber: number){}

  owner(): string{
    return this._owner;
  }

  setter(number: number): void{
    this._secretNumber = number
  }
}

let card = new MyNumberCard('taki', 123456789);

console.log(card.owner())
card.setter(9876543321)
console.log(card.)

