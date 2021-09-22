var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(type, number) {
    this.materials[type] += number;
  }

  buildASnowman() {
    var snowman = new Snowman({
      carrots: this.materials.carrots,
      coal: this.materials.coal,
      buttons: this.materials.buttons,
      snowballs: this.materials.snowballs
    })
    return snowman;
  }

  placeMagicHat() {
    if (!this.buildASnowman().canWearMagicHat()) {
      return 'I guess I didn\'t build it correctly.';
    } else {
      return 'Woah, this snowman is coming to life!';
    }
  }
}

module.exports = Human;
