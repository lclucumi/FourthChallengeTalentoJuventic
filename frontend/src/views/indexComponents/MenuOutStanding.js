import React from "react";
import data from "../../json/dataOutStanding.json";
import DescriptionOutStanding from "./DescriptionOutStanding";

class MenuOutStanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, img: data.objOutStanding[0].img };
  }
  render() {
    return (
      <>
        <div className="col-lg-9 mt-4 mt-lg-0">
          <DescriptionOutStanding
            number={this.state.number}
            img={this.state.img}
          />
        </div>
        <div className="col-lg-3">
          <ul
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#tab-1"
                onClick={() =>
                  this.setState({ number: 0, img: data.objOutStanding[0].img })
                }
              >
                {data.objOutStanding[0].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-2"
                onClick={() =>
                  this.setState({ number: 1, img: data.objOutStanding[1].img })
                }
              >
                {data.objOutStanding[1].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-3"
                onClick={() =>
                  this.setState({ number: 2, img: data.objOutStanding[2].img })
                }
              >
                {data.objOutStanding[2].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-4"
                onClick={() =>
                  this.setState({ number: 3, img: data.objOutStanding[3].img })
                }
              >
                {data.objOutStanding[3].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-5"
                onClick={() =>
                  this.setState({ number: 4, img: data.objOutStanding[4].img })
                }
              >
                {data.objOutStanding[4].title}
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default MenuOutStanding;
