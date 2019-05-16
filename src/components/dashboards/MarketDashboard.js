import React, { Component } from "react";
class MarketDashboard extends Component {
  buyItem = item => {
    if (item === "seeds") {
      this.props.market.currentFarmer.myFarm.seeds.total =
        this.props.market.currentFarmer.budget *
        this.props.market.grassSeedPrice;
      console.log(this.props.market.currentFarmer.myFarm.seeds);
      this.props.market.currentFarmer.budget = 0;
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
          <h5> Budget: £{this.props.market.farmerBudget}</h5>
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
              <button onClick={() => this.buyItem("seeds")}>
                Buy seeds for {this.props.market.grassSeedPrice}
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
            class="sell-btn btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sell
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <dl>
              <dt class="dropdown-item" href="#">
                Milk
              </dt>
              <dd>£{this.props.market.milkPrice} per pint</dd>
              <dt class="dropdown-item" href="#">
                Beef
              </dt>
              <dd>£{this.props.market.beefPrice} per unit</dd>
              <dt class="dropdown-item" href="#">
                12 Eggs
              </dt>
              <dd>£{this.props.market.eggPrice} </dd>
              <dt class="dropdown-item" href="#">
                Pound of chicken
              </dt>
              <dd>£{this.props.market.chickenPrice} </dd>
              <dt class="dropdown-item" href="#">
                Pound of Lamb
              </dt>
              <dd>£{this.props.market.lambPrice} </dd>
              <dt class="dropdown-item" href="#">
                Ball of wool
              </dt>
              <dd>£{this.props.market.woolPrice} </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketDashboard;
