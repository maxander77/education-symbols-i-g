export default Team;

class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    const characters = this.characters;
    let currentIndex = 0;

    return {
      next() {
        if (currentIndex < characters.length) {
          return { 
            value: characters[currentIndex++],
            done: false 
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
}