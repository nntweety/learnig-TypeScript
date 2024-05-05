export{}

class Witch {}
class Solder {}
interface Doctor{
  surgery(): void;
}
interface Teacher{
  teach(): void;
}

class Person extends Solder {}

class Person2 implements Doctor, Teacher{
  surgery(): void {
    console.log('成功です！')
  }

  teach(): void {
    console.log('知識レベルが上がった！')
  }
}

const taki = new Person2();
taki.surgery();
taki.teach();