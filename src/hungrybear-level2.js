import { returnStatement } from "@babel/types";

export class HungryBear2 {

  constructor(name) {
    this.name = name;
    this.foodLevel = 7;
    this.moodLevel = 0;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 7;
  }

  setMood() {
    setInterval(() => {
      this.moodLevel++;
    }, 1000);
  }
}