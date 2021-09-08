// Included initially to pass instantiate. But later on broke final test within Stark. Dependencies must be one-way street.
// const Stark = require('../exercises/stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (!home) {
      this.home = 'Beyond the Wall';
    } else {
      this.home = home;
    }
    if (!size) {
      this.size = 'Massive';
    } else {
      this.size = size
    }
    // Included initially to pass instantiate Stark test. But not needed in the end.. Instead- wrote out logic so that Stark args could be empty and it passes ok.
    // this.stark = new Stark();
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i] === stark) {
        stark.safe = false;
        this.starksToProtect.splice(i, 1);
      }
    }
  }
}

// { name: pupName, age: pupAge }

module.exports = Direwolf;
