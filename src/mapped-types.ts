export{}

type Profile = {
  name: string;
  age: number;
}

type me = Partial<Profile>
type ProfileTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;