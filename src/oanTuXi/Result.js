import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số ván thắng: <span className="text-danger">{this.props.vanThang}</span>
        </div>
        <div className="display-4 text-warning">
          Số ván chơi: <span className="text-danger">{this.props.vanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.oanTuXi.ketQua,
    vanThang: state.oanTuXi.vanThang,
    vanChoi: state.oanTuXi.vanChoi,
  };
};

export default connect(mapStateToProps, null)(Result);
