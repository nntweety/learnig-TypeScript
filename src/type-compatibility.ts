export{}

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooString: string;
let barString: string = 'String';

fooCompatible = barCompatible;