export{}

class VisaCard {
  constructor(public readonly owner: string){}
}

let card = new VisaCard('taki');

console.log(card.owner);
// card.owner = 'name'


