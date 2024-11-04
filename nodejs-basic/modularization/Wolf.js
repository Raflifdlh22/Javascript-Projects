class wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }
  howl() {
    console.log("owoooo!");
  }
}

module.exports = wolf;
