import Drawable from "./abstract/Drawable";
import Field from "./Field";
import Cow from "./animals/Cow";
import Sheep from "./animals/Sheep";
import Chicken from "./animals/Chicken";
import Animal from "./abstract/Animal";
import { type } from "os";

type AnimalGroup<T extends Animal> = {
  name: string;
  total: number;
  objects: Array<T>;
};
type Cows = AnimalGroup<Cow>;
type Sheeps = AnimalGroup<Sheep>;
type Chickens = AnimalGroup<Chicken>;

type ProductGroup = {
  name: string;
  total: number;
  unit: string;
};
type ProductGroupWithPrice = ProductGroup & { price: string };

type milk = ProductGroup;
type eggs = ProductGroup;
type wool = ProductGroup;
type beef = ProductGroupWithPrice;

class Farm extends Drawable {
  fields: Field[] = [];
  width: number = 700;
  height: number = 710;
  cows: any;
  sheeps: Sheeps;
  chickens: Chickens;
  straw: any;
  milk: milk;
  seeds: any;
  eggs: eggs;
  wool: wool;
  beef: beef;
  constructor(
    cows: any = {
      name: "Cows",
      total: 3,
      objects: []
    },
    sheeps: Sheeps = {
      name: "Sheeps",
      total: 2,
      objects: []
    },
    chickens: Chickens = {
      name: "Chickens",
      total: 2,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1000,
      unit: "bails"
    },
    milk: milk = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    },
    eggs: eggs = {
      name: "Chicken Eggs",
      total: 0,
      unit: " "
    },
    wool: wool = {
      name: "Wool",
      total: 0,
      unit: "balls"
    },
    beef: beef = {
      name: "Beef",
      total: 1,
      unit: "Kilo",
      price: "£2"
    }
  ) {
    super();
    this.cows = cows;
    this.sheeps = sheeps;
    this.chickens = chickens;
    this.straw = straw;
    this.milk = milk;
    this.seeds = seeds;
    this.eggs = eggs;
    this.wool = wool;
    this.beef = beef;
  }

  public preload() {
    this.createBasicFarm();
  }

  private createBasicFarm = () => {
    //Cow farm
    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this);
      cow.p5 = this.p5;
      cow.preload();
      cow.setRandomPositionInField(25, 25, 350, 175);
      this.cows.objects.push(cow);
    }
    this.fields.push(new Field(25, 25, 350, 175, this.cows.objects));

    // Sheep farm
    for (let i = 0; i < this.sheeps.total; i++) {
      let sheep = new Sheep(this);
      sheep.p5 = this.p5;
      sheep.preload();
      sheep.setRandomPositionInField(25, 275, 350, 125);
      this.sheeps.objects.push(sheep);
    }
    this.fields.push(new Field(25, 275, 350, 125, this.sheeps.objects));
    //Chicken farm
    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this);
      chicken.p5 = this.p5;
      chicken.preload();
      chicken.setRandomPositionInField(25, 450, 300, 125);
      this.chickens.objects.push(chicken);
    }
    this.fields.push(new Field(25, 450, 300, 125, this.chickens.objects));

    this.fields.push(new Field(475, 25, 200, 325));

    for (let field of this.fields) {
      field.p5 = this.p5;
      field.setHandleUpdate = this.updateUI;
    }
  };

  public draw() {
    for (let field of this.fields) {
      field.draw();
    }
  }
}

export default Farm;
