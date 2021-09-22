class SkatePark {
  constructor(park) {
    this.name = park.name;
    this.yearFounded = park.year;
    this.style = park.type;
    this.features = park.features;
    if (park.isPrivate) {
      this.isPrivate = true;
    } else {
      this.isPrivate = false;
    }
    if (park.price) {
      this.cost = park.price
    } else {
      this.cost = 0;
    }
    this.occupants = [];
  }

  admit(skater) {
    if (this.occupants.length === 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`;
    } else if (!this.cost) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    } else {
      if (this.cost > skater.money) {
        return `Sorry, you don\'t have enough money.`;
      } else {
        skater.money -= this.cost;
        this.occupants.push(skater);
        return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
      }
    }
  }
}

module.exports = SkatePark;
