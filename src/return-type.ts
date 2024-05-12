export{}

function add(a: number, b: number): number{
  return a + b;
}


console.log(add(3, 4));

type ReturnTypeAdd = ReturnType<typeof add>