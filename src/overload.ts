export{}

function double(value: number): number
function double(value: string): string

function double(value: any): any{
  if(typeof value == 'number'){
    return value * 2;
  }else if(typeof value == 'string'){
    return value + value;
  }
}

console.log(double(43))