export{}

class Me {
  static isDeveloper: boolean = true;
  static myName: string = 'taki';
  static age: number = 25;

  static work(): string {
    return `class: ${this.myName}`
  }
}
console.log(Me.work());

