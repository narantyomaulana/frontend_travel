import React, { Component } from "react";

// import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumb} />
            {/* <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            {/* <InputNumber
              max={30}
              suffix= " night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
