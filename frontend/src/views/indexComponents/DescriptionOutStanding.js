import React from "react";
import data from "../../json/dataOutStanding.json";

class DescriptionOutStanding extends React.Component {
  render() {
    return (
      <>
        <div className="tab-content">
          <div
            className="tab-pane active show"
            id={data.objOutStanding[this.props.number].id}
          >
            <div className="row">
              <div className="col-lg-4 text-center order-2 order-lg-1">
                <img
                  src={this.props.img}
                  alt=""
                  className="img-fluid special1"
                />
              </div>
              <div className="col-lg-8 details order-1 order-lg-2">
                <h3>{data.objOutStanding[this.props.number].title}</h3>
                <p className="fst-italic">
                  {data.objOutStanding[this.props.number].firstText}
                </p>
                <p>{data.objOutStanding[this.props.number].secondText}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DescriptionOutStanding;
