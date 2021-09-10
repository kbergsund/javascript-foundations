class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var average = this.handicap + par;
    return `I usually shoot a ${average} on average.`;
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration += 500;
    } else {
      this.frustration += 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    var feature1 = golfCourse.features[0];
    var feature2 = golfCourse.features[1];
    return `I love the ${feature1} and ${feature2} on this course!`;
  }

  whatYaShoot(score) {
    if (!score) {
      this.frustration -= 10;
      return 'Booyah!';
    } else if (score > 0) {
      this.frustration += 20;
      return 'Doh!';
    } else {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }
}

module.exports = Golfer;
