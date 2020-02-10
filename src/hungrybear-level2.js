import { returnStatement } from "@babel/types";

export class HungryBear2 {

  constructor(name) {
    this.name = name;
    this.foodLevel = 6;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  // didYouGetEaten() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     console.log("You've been eaten, try again!");
  //     return true;
  //   }
  // }

  // feed() {
  //   this.foodLevel = 7;
  // }
}