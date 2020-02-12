export class HungryBear1 {

  constructor() {
    this.name = name;
    this.foodLevel = 100;
    this.moodLevel = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 100);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 100);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0 && this.moodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  start() {
    this.foodLevel = 100;
    this.moodLevel = 100;
  }

  feed() {
    this.foodLevel += 10;
    this.moodLevel += 10;
  }
}