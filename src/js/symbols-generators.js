export default Team2();
class Team2 {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for (let character of this.characters) {
      yield character;
    }
  }
}