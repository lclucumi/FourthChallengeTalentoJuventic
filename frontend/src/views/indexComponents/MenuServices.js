import React from "react";
import data from "../../json/dataInfoServices.json";
import DescriptionService from "./DescriptionService";

class MenuServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, img: data.objInfoServices[0].img };
  }
  render() {
    return (
      <>
        <div className="col-lg-3">
          <ul
            className="nav flex-column nav-pills"
            id="v-pills-tab-evento"
            role="tablist"
            aria-orientation="vertical"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#tab-1-e"
                onClick={() =>
                  this.setState({ number: 0, img: data.objInfoServices[0].img })
                }
              >
                {data.objInfoServices[0].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-2-e"
                onClick={() =>
                  this.setState({ number: 1, img: data.objInfoServices[1].img })
                }
              >
                {data.objInfoServices[1].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-3-e"
                onClick={() =>
                  this.setState({ number: 2, img: data.objInfoServices[2].img })
                }
              >
                {data.objInfoServices[2].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-4-e"
                onClick={() =>
                  this.setState({ number: 3, img: data.objInfoServices[3].img })
                }
              >
                {data.objInfoServices[3].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-5-e"
                onClick={() =>
                  this.setState({ number: 4, img: data.objInfoServices[4].img })
                }
              >
                {data.objInfoServices[4].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab-6-e"
                onClick={() =>
                  this.setState({ number: 5, img: data.objInfoServices[5].img })
                }
              >
                {data.objInfoServices[5].title}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-9 mt-4 mt-lg-0">
          <DescriptionService number={this.state.number} img={this.state.img} />
        </div>
      </>
    );
  }
}

export default MenuServices;
