interface named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends named {
  greet(phrase: string): void;
}

interface addFn {
  (a: number, b: number): number;
}

let addd: addFn;

addd = (n1: number, n2: number) => {
  return n1 + n2;
};

class Person implements Greetable {
  name?: string;
  age = 26;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();
console.log(user1);
user1.greet("Hi there");
