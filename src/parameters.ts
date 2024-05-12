export{}

const debugProfile = (name: string, age: number) => {
  console.log({name, age});
};

debugProfile('Ham', 45)

type Profile = Parameters<typeof debugProfile>;

const prof: Profile = ['Taki',25]

debugProfile(...prof);