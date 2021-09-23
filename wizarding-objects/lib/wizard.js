class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.petsCount = 0;
    this.pets = [];
  }

  adoptPet(pet) {
    this.petsCount += 1;
    this.pets.push(pet);
  }

  petList() {
    return `A ${this.pets[0].type} named ${this.pets[0].name}; An ${this.pets[1].type} named ${this.pets[1].name}.`;
  }

  getWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return this.wand.cast(spell);
  }
}

module.exports = Wizard;
