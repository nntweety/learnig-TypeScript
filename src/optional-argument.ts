export{}

let bmi: (height: number, weight: number, printable ?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
):number => {
  const bmi: number = weight/ height * height
 if(printable){
  console.log({bmi})
 }
 return bmi;
}

bmi(2,3,true)