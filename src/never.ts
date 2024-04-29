export{}

function err(message: string): never {
  throw new Error(message)
}

try{
  let result = err('Help')
  console.log({ result })
}catch(error){
  console.log({ error })
}

let foo: void = undefined;
let bar: never; err('only')