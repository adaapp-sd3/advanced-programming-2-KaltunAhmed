import React, { Component } from "react";
import FarmerDashboard from "./dashboards/FarmerDashboard";
import FieldDashboard from "./dashboards/FieldDashboard";
import MarketDashboard from "./dashboards/MarketDashboard";

class FarmManager extends Component {
  render() {
    return (
      <div className="FarmManager">
        <div className="farmerDash">
          {this.props.farmer.showUI && (
            <FarmerDashboard farmer={this.props.farmer} />
          )}
        </div>
        <div className="fieldDash">
          {this.props.farm.fields.map((field, i) => (
            <>{field.showUI && <FieldDashboard key={i} field={field} />}</>
          ))}
        </div>
        <div className="marketDash">
          {this.props.market.showUI && (
            <MarketDashboard market={this.props.market} />
          )}
        </div>
      </div>
    );
  }
}

export default FarmManager;
