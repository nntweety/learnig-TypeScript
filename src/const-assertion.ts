export{}

let name: string = 'Taki';

name = 'Mori';

let name2 = 'Taki' as const;

let profile = {
  name: 'Taki',
  age: 25
}as const;

// profile.name = 'Takassi';

console.log(profile.name);