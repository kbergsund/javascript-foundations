const Human = require('../exercises/human');

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.swings = 0;
    if (ogre.abode) {
      this.home = ogre.abode;
    } else {
      this.home = 'Swamp';
    }
  }

  encounter(human) {
    human.encounterCounter += 1;
    if (human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swings += 1;
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    if (human.noticesOgre) {
      this.swings += 1;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
