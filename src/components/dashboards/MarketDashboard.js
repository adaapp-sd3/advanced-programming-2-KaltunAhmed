import React, { Component } from "react";
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
  sellMilk = item => {
    var newProfit = this.props.market.currentFarmer.profit;
    if (
      item === "milk" &&
      this.props.market.currentFarmer.myFarm.milk.total > 0
    ) {
      var newProfit =
        this.props.market.currentFarmer.profit + this.props.market.milkPrice;
      this.props.market.currentFarmer.profit = newProfit;
      var newPintAmount =
        this.props.market.currentFarmer.myFarm.milk.total -
        this.props.market.milkPrice * 2;
      this.props.market.currentFarmer.myFarm.milk.total = newPintAmount;
    } else {
      alert("NOT ENOUGH MILK DUDE!");
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
          <p>
            Seed total: {this.props.market.currentFarmer.myFarm.seeds.total}
          </p>
          <p>
            Straw total: {this.props.market.currentFarmer.myFarm.straw.total}
          </p>
        </div>
        <div className="profit">
          <h5> Profit: £{this.props.market.currentFarmer.profit}</h5>
        </div>
        <div className="buy dropdown">
          <button
            class="sell-btn btn btn-primary dropdown-toggle"
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
            <dt>Solar panels</dt>
            <dd>{this.props.market.solarPanelPrice} per unit</dd>
            <dt>Green gas</dt>
            <dd>{this.props.market.greenGasPrice} per unit</dd>
          </dl>
        </div>
        <div className="sell dropdown">
          <button
            class="sell-btn btn btn-primary"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sell
          </button>
          <dl>
            <div className="milkSell">
              <dt>Milk</dt>
              <dd>
                <button onClick={() => this.sellMilk("milk")}>
                  £{this.props.market.milkPrice} for 4 pints
                </button>
              </dd>
            </div>
            <dt>Beef</dt>
            <dd>£{this.props.market.beefPrice} per unit</dd>
            <dt>12 Eggs</dt>
            <dd>£{this.props.market.eggPrice} </dd>
            <dt>Pound of chicken</dt>
            <dd>£{this.props.market.chickenPrice} </dd>
            <dt>Pound of Lamb</dt>
            <dd>£{this.props.market.lambPrice} </dd>
            <dt>Ball of wool</dt>
            <dd>£{this.props.market.woolPrice} </dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default MarketDashboard;
