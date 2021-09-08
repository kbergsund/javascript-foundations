class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    var materialCost = 0; 
    for (var i = 0; i < this.materials.length; i++) {
      materialCost += this.materials[i].price * this.materials[i].amount;
    }
    return materialCost;
  }
}

module.exports = Craft;
