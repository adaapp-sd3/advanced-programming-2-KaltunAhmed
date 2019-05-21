import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Chicken extends Animal {
  name: string = "Chicken";
  genus: string = "Chicken";
  imgUrl: string = "/img/ios_img/rooster_1f413.png";
  eats: string = "straw";
  hunger: number = 5;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }
  eatSeeds() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.seeds.total > 0) {
        this.farm.seeds.total--;
        this.hunger = this.hunger - 1;
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1;
        }
      }
    }
  }
  yieldChickenMeat() {
    let amountOfChickenMeatToYield = 3 * this.farm.chickens.total;
    if (this.farm.chickens.objects.length > 0) {
      this.farm.chickens.objects.pop();
      this.farm.chickens.total = this.farm.chickens.objects.length;
      this.farm.chickenMeat.total += Math.abs(amountOfChickenMeatToYield);
    }
    console.log(
      "Chicken Total",
      this.farm.chickens.objects.length,
      this.farm.sheeps.total,
      this.farm.chickenMeat.total
    );
  }

  yieldEggs() {
    let amountOfEggsToYield = 2 - this.hunger;
    this.farm.eggs.total += Math.abs(amountOfEggsToYield);
    this.hunger = 5;
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
    this.doSomethingOccasionally(() => this.eatSeeds());
    this.stopForFarmer();
  }
}

export default Chicken;
