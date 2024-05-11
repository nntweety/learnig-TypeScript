export{};

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: 'Ham',
  age: 43
};

me.age++

type Secret = Readonly<Profile>;

const you: Secret = {
  name: 'Ham',
  age: 43
};

type YomitoriOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Y = YomitoriOnly<Profile>;



console.log(me.age);

const firend: Secret = {

}

