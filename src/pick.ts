export{}

type Pearson = {
  name: string;
  height: number;
  weight: number;
}

type SimplePearson = Pick<Pearson, 'name' | 'weight'>
type Another = Omit<Pearson, 'height'>