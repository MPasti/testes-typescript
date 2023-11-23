abstract class Animal {
  abstract makeNoise(): void;
}

class Dog extends Animal {
  constructor(private readonly name: string) {
    super();
  }

  makeNoise(): void {
    console.log(`${this.name} está latindo.`);
  }
}

const dog = new Dog('Ruth');
dog.makeNoise(); //Ruth está latindo
