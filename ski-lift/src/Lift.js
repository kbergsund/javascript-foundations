var Skier = require('./Skier');

class Lift {
  constructor(chairSize) {
    this.inService = true;
    this.limit = chairSize;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticket) {
    if (this.skiers.length === this.limit) {
      return `Sorry, ${name}. Please wait for the next lift!`;
    } else {
      if (!ticket) {
        return `Sorry, ${name}. You need a lift ticket!`;
      } else {
        var skier = new Skier(name, ticket);
        this.skiers.push(skier);
      }
    }
  }

  startLift() {
    if (this.skiers.length === this.limit) {
    this.safetyBar = 'down';
  } else {
    var remainingSeats = this.limit - this.skiers.length;
    if (remainingSeats === 1) {
      return `We still need ${remainingSeats} more skier!`;
    } else {
      return `We still need ${remainingSeats} more skiers!`;
    }
  }
  }
}

module.exports = Lift;
