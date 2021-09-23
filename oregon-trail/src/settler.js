class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    if (!settler.nationality) {
      this.nationality = 'unknown';
    } else {
      this.nationality = settler.nationality
    }
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(distress) {
    if (this.status !== 'dead') {
      this.ailments.push(distress);
      if (this.ailments.length === 1) {
        this.status = 'fair';
      } else if (this.ailments.length === 2) {
        this.status = 'poor';
      } else {
        this.status = 'dead';
      }
    }
  }

  heal() {
    if (this.status !== 'dead') {
    this.ailments = [];
    this.status = 'healthy';
  } else {
    return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`;
  }
  }
}

module.exports = Settler;
