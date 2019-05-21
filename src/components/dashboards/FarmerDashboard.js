import React, { Component } from "react";

class FarmerDashboard extends Component {
  hideUI = () => {
    this.props.farmer.showUI = false;
  };
  showUI = () => {
    if ((this.props.farmer.showUI = false)) this.props.farmer.showUI = true;
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
            <dd>
              <h4>{this.props.farmer.budget}</h4>
            </dd>
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
                  <p>{this.props.farmer.myFarm.sheeps.total}</p>
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
                <div className="nonMeats">
                  <div className="milk">
                    {" "}
                    {/* milk*/}
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
                    {" "}
                    {/* wool */}
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
                    {" "}
                    {/* eggs*/}
                    <img
                      src={process.env.PUBLIC_URL + "img/ios_img/egg_1f95a.png"}
                      alt="Eggs"
                    />
                    <p>{this.props.farmer.myFarm.eggs.total}</p>
                  </div>
                </div>
                <hr />
                <div className="meats">
                  {" "}
                  {/* meats*/}
                  <div className="beef">
                    {/* beef*/}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "img/ios_img/cut-of-meat_1f969 (1).png"
                      }
                      alt="beef"
                    />
                    <p>{this.props.farmer.myFarm.beef.total} Kg</p>
                  </div>
                  <div className="mutton">
                    {/* mutton*/}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "img/ios_img/meat-on-bone_1f356.png"
                      }
                      alt="mutton"
                    />
                    <p>{this.props.farmer.myFarm.mutton.total} Kg</p>
                  </div>
                  <div className="chickenMeat">
                    {/* chicken*/}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "img/ios_img/poultry-leg_1f357.png"
                      }
                      alt="chickenMeat"
                    />
                    <p>{this.props.farmer.myFarm.chickenMeat.total} Kg</p>
                  </div>
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
        <button className="btn-warning" onClick={this.hideUI || this.showUI}>
          Hide UI
        </button>
      </div>
    );
  }
}

export default FarmerDashboard;
