export{}

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartiaType = Partial<Profile>;

type RequiredType = Required<Profile>

