class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    if (!wagon.wheels) {
      this.wheels = [];
    } else {
      this.wheels = wagon.wheels;
    }
    if (!wagon.axles) {
      this.axles = [];
    } else {
      this.axles = wagon.axles;
    }
    if (!wagon.oxen) {
      this.oxen = [];
    } else {
      this.oxen = wagon.oxen;
    }
    if (!wagon.yokes) {
      this.yokes = [];
    } else {
      this.yokes = wagon.yokes;
    }
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    if (!wagon.settlers) {
      this.settlers = [];
    } else {
      this.settlers = wagon.settlers;
    }
  }

  addPart(part) {
    if (part.type === 'wheel') {
      this.wheels.push(part);
    } else if (part.type === 'axle') {
      this.axles.push(part);
    } else if (part.type === 'ox') {
      this.oxen.push(part);
    } else {
      this.yokes.push(part);
    }
  }

  canTravel() {
    for (var i = 0; i < this.wheels.length; i++) {
      if (this.wheels[i].broken) {
        return false;
      }
    }
    for (var i = 0; i < this.axles.length; i++) {
      if (this.axles[i].broken) {
        return false;
      }
    }
    for (var i = 0; i < this.oxen.length; i++) {
      if (this.oxen[i].broken) {
        return false;
      }
    }
    for (var i = 0; i < this.settlers.length; i++) {
      if (this.settlers[i].status === 'dead') {
        return false;
      }
    }
    if (this.oxen.length === 4 && this.yokes.length === 1) {
      return false;
    } else if (this.wheels.length === 4 && this.axles.length === 2 && this.oxen.length >= 2 && this.yokes.length >= 1 && this.settlers.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Wagon;
