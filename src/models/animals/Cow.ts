import Animal from "../abstract/Animal";
import Farm from "../Farm";
class Cow extends Animal {
  name: string = "Cow";
  genus: string = "Cows";
  imgUrl: string = "/img/ios_img/cow_1f404.png";
  eats: string = "straw";
  hunger: number = 5;
  farm: Farm;

  constructor(farm: Farm) {
    super();
    this.farm = farm;
  }

  // if cow is hungry, yield less milk
  yieldMilk() {
    let amountOfMilkToYield = 5 - this.hunger;
    this.farm.milk.total += Math.abs(amountOfMilkToYield);
    this.hunger = 5;
  }
  killCow() {
    let amountOfBeefToYield = 10 * this.farm.cows.total;
    if (this.farm.cows.objects.length > 0) {
      this.farm.cows.objects.pop();
      this.farm.cows.total = this.farm.cows.objects.length;
      this.farm.beef.total += Math.abs(amountOfBeefToYield);
    }
    console.log(
      "cow Total",
      this.farm.cows.objects.length,
      this.farm.cows.total,
      this.farm.beef.total
    );
  }

  // if cow is thin, yield less beef
  yieldBeef(): number {
    return this.hunger > 0 ? 100 / this.hunger : 120;
  }
  //get beef
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
    //console.log(this.p5Img);
  }

  makeSound() {
    return "Moooo";
  }

  public draw(): any {
    this.constrainItem();
    this.doSomethingOccasionally(() => this.eatStraw());
    this.stopForFarmer();
  }
}

export default Cow;
