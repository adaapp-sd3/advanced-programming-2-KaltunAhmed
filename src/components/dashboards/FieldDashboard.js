import React, { Component } from "react";

class FieldDashboard extends Component {
  milkCows = () => {
    for (var i = 0; i < this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk();
    }
  };
  killCow = () => {
    var newCowCount = this.farm.cows.objects.total;
    console.log("cowTotal", newCowCount);
  };
  collectEggs = () => {
    for (var i = 0; i < this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldEggs();
    }
  };
  collectWool = () => {
    for (var i = 0; i < this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldWool();
    }
  };
  collectBeef = () => {
    for (var i = 0; i < this.props.field.contents.length; i++) {
      this.props.field.contents[i].killCow();
    }
  };
  collectMutton = () => {
    for (var i = 0; i < this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMutton();
    }
  };
  collectChickenMeat = () => {
    for (var i = 0; i < this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldChickenMeat();
    }
  };

  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        {this.props.field.contents[0] && (
          <div className="fieldContents">
            <p>
              In this field you have {this.props.field.contents.length}{" "}
              {this.props.field.contents[0].name}s
              {this.props.field.contents[0].name === "Cow" && (
                <button onClick={this.milkCows}>Milk them</button>
              )}
              {this.props.field.contents[0].name === "Cow" && (
                <button onClick={this.collectBeef}>Collect Beef</button>
              )}
              {this.props.field.contents[0].name === "Chicken" && (
                <button onClick={this.collectEggs}>Collect Eggs</button>
              )}
              {this.props.field.contents[0].name === "Chicken" && (
                <button onClick={this.collectChickenMeat}>Chicken Meat</button>
              )}
              {this.props.field.contents[0].name === "Sheep" && (
                <button onClick={this.collectWool}>Collect Wool</button>
              )}
              {this.props.field.contents[0].name === "Sheep" && (
                <button onClick={this.collectMutton}>Collect Mutton</button>
              )}
            </p>
          </div>
        )}
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3>
                  <img src={item.imgUrl} alt={item.name} /> {item.name}
                </h3>
                <dl>
                  <dt>Hunger</dt>
                  <dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    );
  }
}

export default FieldDashboard;
