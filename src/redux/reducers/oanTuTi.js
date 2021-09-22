const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "Bạn thắng",
  vanThang: 0,
  vanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};

const oanTuXi = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangDatCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let ngauNhien = Math.floor(Math.random() * 3);
      let qcRandom = state.mangDatCuoc[ngauNhien];
      state.computer = qcRandom;

      return { ...state };
    }
    case "ENDGAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      state.vanChoi += 1;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoa";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thang";
            state.vanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Thang";
            state.vanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoa";
          } else {
            state.ketQua = "Thua";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thang";
            state.vanThang += 1;
          } else {
            state.ketQua = "Hoa";
          }
          break;
        default:
          break;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default oanTuXi;
