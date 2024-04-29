export{}

type Moji = string;
let text: Moji = 'test';
console.log(text);

const exp = {
  name: 'Taki',
  age: 40
}

type Profile = {
  name: 'Taki',
  age: 40
}

const exp2: Profile = {
  name: 'Taki',
  age: 'test'
}
type profile3 = typeof exp