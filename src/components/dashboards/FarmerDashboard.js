import React, { Component } from "react";

class FarmerDashboard extends Component {
  hideUI = () => {
    this.props.farmer.showUI = false;
  };

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <div className="currentBudget">
            <dt>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "img/ios_img/banknote-with-dollar-sign_1f4b5.png"
                }
                title="money"
              />
            </dt>
            <dd>{this.props.farmer.budget}</dd>
          </div>

          <div className="totalAnimals">
            <br />
            {this.props.farmer.myFarm && (
              <>
                <div className="animal1">
                  <img
                    src={process.env.PUBLIC_URL + "img/ios_img/cow_1f404.png"}
                    alt="cow"
                  />
                  <p> {this.props.farmer.myFarm.cows.total}</p>
                </div>
                <div className="animal2">
                  <img
                    src={process.env.PUBLIC_URL + "img/ios_img/sheep_1f411.png"}
                    alt="sheep"
                  />
                  <p>{this.props.farmer.myFarm.chickens.total}</p>
                </div>
                <div className="animal3">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/ios_img/rooster_1f413.png"
                    }
                    alt="chicken"
                  />
                  <p>{this.props.farmer.myFarm.chickens.total} </p>
                </div>
              </>
            )}
          </div>
          {this.props.farmer.myFarm && (
            <>
              <div className="products">
                <div className="milk">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "img/ios_img/glass-of-milk_1f95b.png"
                    }
                    alt="milk"
                  />
                  <p>{this.props.farmer.myFarm.milk.total} pints</p>
                </div>
                <div className="Wool">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "img/ios_img/ball-of-yarn_1f9f6.png"
                    }
                    alt="wool"
                  />
                  <p> {this.props.farmer.myFarm.wool.total}</p>
                </div>
                <div className="Eggs">
                  <img
                    src={process.env.PUBLIC_URL + "img/ios_img/egg_1f95a.png"}
                    alt="Eggs"
                  />
                  <p>{this.props.farmer.myFarm.eggs.total}</p>
                </div>
              </div>
              <div className="buyables">
                <h5>Total straw</h5>
                <p>{this.props.farmer.myFarm.straw.total} bails</p>
                <h5>Total seeds</h5>
                <p>{this.props.farmer.myFarm.seeds.total} bunches</p>
              </div>
            </>
          )}
        </dl>
        <button className="btn-warning" onClick={this.hideUI}>
          Hide UI
        </button>
      </div>
    );
  }
}

export default FarmerDashboard;
