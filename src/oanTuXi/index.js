import React, { Component } from "react";
import "./index.css";
import Player from "./player";
import Computer from "./computer";
import Result from "./Result";
import { connect } from "react-redux";

class BTOanTuxi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-4">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Result />
            <button
              className="btn btn-success p-2 display-4 mt-3"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputer = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count >= 50) {
          clearInterval(randomComputer);

          dispatch({
            type:'ENDGAME'
          })
        }
      }, 50);
    },
  };
};
export default connect(null, mapDispatchToProps)(BTOanTuxi);
