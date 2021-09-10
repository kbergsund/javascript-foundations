class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.currentlyPlaying = [];
    this.features = features;
  }

  checkInGroup(group) {
    if (group.length < this.openings) {
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
        this.openings -= 1;
      }
      return 'You\'re checked in. Have fun!';
    } else {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  }
}

module.exports = GolfCourse;
