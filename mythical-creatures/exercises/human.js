class Human {
  constructor(name) {
    this.name = name
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre() {
    if (this.encounterCounter === 3 || this.encounterCounter === 6) {
      var noticesOgre = true;
    } else {
      var noticesOgre = false;
    }
    return noticesOgre;
  }
}

module.exports = Human;
