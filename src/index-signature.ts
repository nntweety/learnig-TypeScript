export{}

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean
}

let profile: Profile = {underTwenty: false}

profile.name = 'test'
profile.age = 45