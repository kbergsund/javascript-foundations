
class Dragon {
  constructor(name, rider) {
    this.ate = 0;
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.ate += 1;
    if (this.ate >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
