const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(stark) {
    if (!stark) {
      this.name = 'Bran';
    } else {
      this.name = stark.name;
      if (!stark.area) {
        this.location = 'Winterfell';
      } else {
      this.location = stark.area;
      }
    }
      this.safe = false;
    }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;
