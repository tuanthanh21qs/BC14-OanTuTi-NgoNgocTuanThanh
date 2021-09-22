import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="think">
          <img
            className="mt-4"
            style={{ width: 60, height: 60 }}
            src={this.props.computer.hinhAnh}
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 250 }}
          src="./img/playerComputer.png"
          alt="player"
        ></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.oanTuXi.computer,
  };
};

export default connect(mapStateToProps)(Computer);
