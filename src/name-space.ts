export{};

namespace Japanese{
  export namespace Kantou{
    export class Person{
      constructor(public name: string){}
    }
  }
  namespace Kansai{
    export class Person{
      constructor(public name: string){}
    }
  }
}


namespace English{
  export class Person{
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ){}
  }
}

const me = new Japanese.Kantou.Person('taki')
