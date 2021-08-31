class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
      this.color = color;
    }
  }

  isWhite(color) {
    if (color !== 'white') {
      return false
    }
  }

  says(message) {
    return `**;* ${message} *;**`
  }
}

module.exports = Unicorn;
