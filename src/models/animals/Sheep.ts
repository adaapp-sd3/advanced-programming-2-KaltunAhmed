import Animal from "../abstract/Animal";
import Farm from "../Farm";

class Sheep extends Animal {
  name: string = "Sheep";
  genus: string = "Sheeps";
  imgUrl: string = "/img/ios_img/sheep_1f411.png";
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
  yieldWool() {
    let amountOfWoolToYield = 1;
    this.farm.wool.total += Math.abs(amountOfWoolToYield);
  }
  yieldMutton() {
    let amountOfMuttonToYield = 24 * this.farm.sheeps.total;
    if (this.farm.sheeps.objects.length > 0) {
      this.farm.sheeps.objects.pop();
      this.farm.sheeps.total = this.farm.sheeps.objects.length;
      this.farm.mutton.total += Math.abs(amountOfMuttonToYield);
    }
    console.log(
      "Sheep Total",
      this.farm.sheeps.objects.length,
      this.farm.sheeps.total,
      this.farm.mutton.total
    );
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
    console.log(this.p5Img);
  }

  makeSound() {
    return "Baa";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
  }
}

export default Sheep;
