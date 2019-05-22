import React, { Component } from "react";
import Cow from "../../models/animals/Cow";
class MarketDashboard extends Component {
  buySeeds = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    if (
      item === "seeds" &&
      this.props.market.currentFarmer.budget > this.props.market.grassSeedPrice
    ) {
      var newBudget =
        this.props.market.currentFarmer.budget -
        this.props.market.grassSeedPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newSeedAmount =
        this.props.market.currentFarmer.myFarm.seeds.total +
        this.props.market.grassSeedPrice;
      this.props.market.currentFarmer.myFarm.seeds.total = newSeedAmount;
    }
  };
  buyStraw = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    if (
      item === "straw" &&
      this.props.market.currentFarmer.budget > this.props.market.strawPrice
    ) {
      var newBudget =
        this.props.market.currentFarmer.budget - this.props.market.strawPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newStrawAmount =
        this.props.market.currentFarmer.myFarm.straw.total +
        this.props.market.strawPrice;
      this.props.market.currentFarmer.myFarm.straw.total = newStrawAmount;
    }
  };
  buySolar = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    if (
      item === "solar" &&
      this.props.market.currentFarmer.budget > this.props.market.solarPanelPrice
    ) {
      var newBudget =
        this.props.market.currentFarmer.budget -
        this.props.market.solarPanelPrice;
      this.props.market.currentFarmer.budget = newBudget;
      alert("WELL DONE FOR SAVING THE EARTH");
    } else {
      alert("NOT ENOUGH MONEY");
    }
  };
  buyGas = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    if (
      item === "gas" &&
      this.props.market.currentFarmer.budget > this.props.market.greenGasPrice
    ) {
      var newBudget =
        this.props.market.currentFarmer.budget -
        this.props.market.greenGasPrice;
      this.props.market.currentFarmer.budget = newBudget;
      alert("OOOOOH you've got gas");
    } else {
      alert("NOT ENOUGH MONEY");
    }
  };

  buyCow = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newCowTotal = this.props.market.currentFarmer.myFarm.cows.total;
    console.log(newCowTotal, "COW TOTAL");
    if (
      item === "cow" &&
      this.props.market.currentFarmer.budget > this.props.market.cowPrice
    )
      var newBudget =
        this.props.market.currentFarmer.budget - this.props.market.cowPrice;
    this.props.market.currentFarmer.budget = newBudget;
    this.props.market.currentFarmer.myFarm.cows.objects.push();
    newCowTotal = this.props.market.currentFarmer.myFarm.cows.total + 1;
    this.props.market.currentFarmer.myFarm.cows.total = newCowTotal;
  };
  buySheep = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newAnimalTotal = this.props.market.currentFarmer.myFarm.sheeps.total;
    if (
      item === "sheep" &&
      this.props.market.currentFarmer.budget > this.props.market.sheepPrice
    )
      var newBudget =
        this.props.market.currentFarmer.budget - this.props.market.sheepPrice;
    this.props.market.currentFarmer.budget = newBudget;
    this.props.market.currentFarmer.myFarm.sheeps.objects.push();
    newAnimalTotal = this.props.market.currentFarmer.myFarm.sheeps.total + 1;
    this.props.market.currentFarmer.myFarm.sheeps.total = newAnimalTotal;
  };
  buyChicken = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newChickenTotal = this.props.market.currentFarmer.myFarm.chickens.total;
    if (
      item === "chicken" &&
      this.props.market.currentFarmer.budget > this.props.market.chickenPrice
    )
      var newBudget =
        this.props.market.currentFarmer.budget - this.props.market.chickenPrice;
    this.props.market.currentFarmer.budget = newBudget;
    this.props.market.currentFarmer.myFarm.chickens.objects.push();
    newChickenTotal = this.props.market.currentFarmer.myFarm.chickens.total + 1;
    this.props.market.currentFarmer.myFarm.chickens.total = newChickenTotal;
  };

  sellMilk = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "milk" &&
      this.props.market.currentFarmer.myFarm.milk.total > 4
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit + this.props.market.milkPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newBudget =
        this.props.market.currentFarmer.budget + this.props.market.milkPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newPintAmount =
        this.props.market.currentFarmer.myFarm.milk.total -
        this.props.market.milkPrice * 2;
      this.props.market.currentFarmer.myFarm.milk.total = newPintAmount;
    } else {
      alert("NOT ENOUGH MILK DUDE!");
    }
  };
  sellBeef = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "beef" &&
      this.props.market.currentFarmer.myFarm.beef.total > 0
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit + this.props.market.beefPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newBudget =
        this.props.market.currentFarmer.budget + this.props.market.beefPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newbeefAmount =
        this.props.market.currentFarmer.myFarm.beef.total - 10;
      this.props.market.currentFarmer.myFarm.beef.total = newbeefAmount;
    } else {
      alert("NOT ENOUGH BEEF DUDE!");
    }
  };
  sellEggs = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "eggs" &&
      this.props.market.currentFarmer.myFarm.eggs.total > 12
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit + this.props.market.eggPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newBudget =
        this.props.market.currentFarmer.budget + this.props.market.eggPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newAmount = this.props.market.currentFarmer.myFarm.eggs.total - 12;
      this.props.market.currentFarmer.myFarm.eggs.total = newAmount;
    } else {
      alert("NOT ENOUGH EGGS DUDE!");
    }
  };
  sellChickenMeat = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "chickenMeat" &&
      this.props.market.currentFarmer.myFarm.chickenMeat.total > 0
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit +
        this.props.market.chickenMeatPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newBudget =
        this.props.market.currentFarmer.budget +
        this.props.market.chickenMeatPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newItemAmount =
        this.props.market.currentFarmer.myFarm.chickenMeat.total - 4;
      this.props.market.currentFarmer.myFarm.chickenMeat.total = newItemAmount;
    } else {
      alert("NOT ENOUGH CHICKEN DUDE!");
    }
  };
  sellMutton = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "mutton" &&
      this.props.market.currentFarmer.myFarm.mutton.total > 0
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit + this.props.market.muttonPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newBudget =
        this.props.market.currentFarmer.budget + this.props.market.muttonPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newItemAmount =
        this.props.market.currentFarmer.myFarm.mutton.total - 5;
      this.props.market.currentFarmer.myFarm.mutton.total = newItemAmount;
    } else {
      alert("NOT ENOUGH MUTTON DUDE!");
    }
  };
  sellWool = item => {
    var newBudget = this.props.market.currentFarmer.budget;
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "wool" &&
      this.props.market.currentFarmer.myFarm.wool.total > 0
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit + this.props.market.woolPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newBudget =
        this.props.market.currentFarmer.budget + this.props.market.woolPrice;
      this.props.market.currentFarmer.budget = newBudget;
      var newItemAmount = this.props.market.currentFarmer.myFarm.wool.total - 1;
      this.props.market.currentFarmer.myFarm.wool.total = newItemAmount;
    } else {
      alert("NOT ENOUGH wool DUDE!");
    }
  };

  render() {
    return (
      <div className="MarketDashboard">
        <div className="top-section">
          <h2>Market</h2>
          <p>Welcome to the market! See our prices below:</p>
        </div>
        <div className="budget">
          <h5> Budget: £{this.props.market.currentFarmer.budget}</h5>
        </div>
        <div className="profit">
          <h5> Profit: £{this.props.market.currentFarmer.profit}</h5>
        </div>
        <br />
        <div className="info">
          <p>
            Seed total: {this.props.market.currentFarmer.myFarm.seeds.total}
          </p>
          <p>
            Straw total: {this.props.market.currentFarmer.myFarm.straw.total}
          </p>
          <p>Cow total: {this.props.market.currentFarmer.myFarm.cows.total}</p>
          <p>
            Sheep total: {this.props.market.currentFarmer.myFarm.sheeps.total}
          </p>
          <p>
            Chicken total:{" "}
            {this.props.market.currentFarmer.myFarm.chickens.total}
          </p>
        </div>
        <div className="buy dropdown">
          <button
            class="sell-btn"
            type="button"
            id="dropdownMenuButtonBuy"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Buy
          </button>
          <dl>
            <dt>Seeds</dt>
            <dd>
              <button onClick={() => this.buySeeds("seeds")}>
                Buy seeds for {this.props.market.grassSeedPrice}
              </button>
            </dd>
            <dt>Straw</dt>
            <dd>
              <button onClick={() => this.buyStraw("straw")}>
                Buy straw for {this.props.market.strawPrice}
              </button>
            </dd>
            <dt>Cows</dt>
            <dd>
              <button onClick={() => this.buyCow("cow")}>
                Buy a Cow for {this.props.market.cowPrice}
              </button>
            </dd>
            <dt>Sheep</dt>
            <dd>
              <button onClick={() => this.buySheep("sheep")}>
                Buy a Sheep for {this.props.market.sheepPrice}
              </button>
            </dd>
            <dt>Chicken</dt>
            <dd>
              <button onClick={() => this.buyChicken("chicken")}>
                Buy a Chicken for {this.props.market.chickenPrice}
              </button>
            </dd>
            <dt>Solar panels</dt>
            <dd>
              <button onClick={() => this.buySolar("solar")}>
                {this.props.market.solarPanelPrice} per unit
              </button>{" "}
            </dd>
            <dt>Green gas</dt>
            <dd>
              {" "}
              <button onClick={() => this.buyGas("gas")}>
                {this.props.market.greenGasPrice} per unit
              </button>
            </dd>
          </dl>
        </div>
        <div className="sell dropdown">
          <button
            class="sell-btn btn btn-primary btn-lg btn-block"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sell
          </button>
          <dl>
            <div className="mgw">
              <div className="milkSell">
                <dt>Milk</dt>
                <dd>
                  <button onClick={() => this.sellMilk("milk")}>
                    £{this.props.market.milkPrice} for 4 pints
                  </button>
                </dd>
              </div>
              <div className="eggSell">
                <dt>12 Eggs</dt>
                <dd>
                  <button onClick={() => this.sellEggs("eggs")}>
                    £{this.props.market.eggPrice} For 12
                  </button>
                </dd>
              </div>
              <div className="woolSell">
                <dt>Ball of wool</dt>
                <button onClick={() => this.sellWool("wool")}>
                  £{this.props.market.woolPrice} Ball of wool
                </button>
              </div>
            </div>
            <div className="bmc">
              <div className="beefSell">
                <dt>Beef</dt>
                <dd>
                  <button onClick={() => this.sellBeef("beef")}>
                    £{this.props.market.beefPrice} per unit
                  </button>
                </dd>
              </div>
              <div className="muttonSell">
                <dt>Pound of Lamb</dt>
                <dd>
                  <button onClick={() => this.sellMutton("mutton")}>
                    £{this.props.market.muttonPrice} for 5kg
                  </button>
                </dd>
              </div>
              <div className="chickenSell">
                <dt>Pound of chicken</dt>
                <button onClick={() => this.sellChickenMeat("chickenMeat")}>
                  £{this.props.market.chickenMeatPrice} For whole chicken
                </button>
              </div>
            </div>
          </dl>
        </div>
      </div>
    );
  }
}

export default MarketDashboard;
