import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    console.log(this.props.mangDatCuoc);
    const { hinhAnh } = this.props;
    return (
      <div className="text-center playerGame">
        <div className="think">
          <img
            className="mt-4"
            style={{ width: 60, height: 60, transform: "rotate(180deg)" }}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 250 }}
          src="./img/player.png"
          alt="player"
        ></img>
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid red" };
            }

            return (
              <div className="col-md-4">
                <button
                  key={index}
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  className="btnItem"
                  style={border}
                >
                  <img
                    style={{ width: 40, height: 40 }}
                    src={item.hinhAnh}
                  ></img>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.oanTuXi.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({ type: "DAT_CUOC", maCuoc });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
