import React from "react";
import dataService from "../../json/dataInfoServices.json";

class DescriptionService extends React.Component {
  render() {
    return (
      <>
        <div className="tab-content">
          <div
            className="tab-pane active show"
            id={dataService.objInfoServices[this.props.number].id}
          >
            <div className="row">
              <div className="col-lg-7 details order-2 order-lg-1">
                <h3>{dataService.objInfoServices[this.props.number].title}</h3>
                <p className="fst-italic">
                  {dataService.objInfoServices[this.props.number].text}
                </p>
              </div>
              <div className="col-lg-5 text-center order-1 order-lg-2">
                <img
                  src={this.props.img}
                  alt=""
                  className="img-fluid special1 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DescriptionService;
