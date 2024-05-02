export{}

const newYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
}

console.log(newYearSalary(1000))