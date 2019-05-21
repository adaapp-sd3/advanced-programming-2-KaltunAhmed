import Drawable from "./abstract/Drawable";
import Farmer from "./Farmer";
import Cow from "./animals/Cow";

class Market extends Drawable {
  imgUrl = "/img/ios_img/shopping-trolley_1f6d2.png";
  currentFarmer!: Farmer;

  farmerBudget: number = 1000;
  greenGasDemand: number = 100;
  milkDemand: number = 75;
  beefDemand: number = 75;

  milkPrice: number = 2;
  beefPrice: number = 25;
  eggPrice: number = 2;
  chickenMeatPrice: number = 4;
  muttonPrice: number = 20;
  woolPrice: number = 10;

  greenGasPrice: number = 10;

  solarPanelPrice: number = 10000;

  grassSeedPrice: number = 10;

  strawPrice: number = 10;

  constructor() {
    super();
    this.x = 600;
    this.y = 500;
    this.width = 60;
    this.height = 60;
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height);
  }
}

export default Market;
