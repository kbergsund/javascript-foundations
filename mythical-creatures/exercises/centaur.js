
class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.crankMeter = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    if (this.crankMeter === 2 || !this.standing) {
      this.cranky = true;
      return 'NO!';
    } else {
      this.crankMeter += 1;
      return 'Twang!!!';
    }
  }

  run() {
    if (this.crankMeter === 2 || !this.standing) {
      this.cranky = true;
      return 'NO!';
    } else {
      this.crankMeter += 1;
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      this.crankMeter = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    if (this.standing) {
      this.layingDown = true;
      this.standing = false;
    }
  }

  standUp() {
    if (this.layingDown) {
      this.standing = true;
      this.layingDown = false;
    }
  }

  drinkPotion() {
    if (this.layingDown) {
      return `Not while I'm laying down!`;
    } else {
      this.cranky = false;
      this.crankMeter = 0;
    }
  }
}

module.exports = Centaur;
