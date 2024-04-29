export{}

type Pitcher1 = {
  speed: number
}

type Butter1 = {
  average: number
}

const majin: Pitcher1 = {
  speed: 155
}

const ochi: Butter1 = {
  average: 4.33
}

type TwoWayP = Pitcher1 & Butter1;

const Otani: TwoWayP = {
  speed: 165,
  average: 9.99
}