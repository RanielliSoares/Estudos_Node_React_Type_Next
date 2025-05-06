class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    return `My name is ${this.name}, Hello!`;
  }
}

module.exports = {
  Person: Person,
};
