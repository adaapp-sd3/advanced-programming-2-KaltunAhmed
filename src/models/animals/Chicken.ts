import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Chicken extends Animal {
  name: string = "Chicken";
  genus: string = "Chicken";
  imgUrl: string = "/img/twtr/1f413.png";
  eats: string = "straw";
  hunger: number = 5;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }
  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--;
        this.hunger = this.hunger - 1;
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1;
        }
      }
    }
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  makeSound() {
    return "Coo Coo";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
  }
}

export default Chicken;
