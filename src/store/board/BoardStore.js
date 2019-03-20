import { observable, action, computed } from "mobx";
import axios from "axios";
import { sessionService } from "redux-react-session";

export default class BoardStore {
  @observable
  boardArr = [];

  @action
  getBoard = () => {
    axios
      .get(`${process.env.REACT_APP_BOARD_URI}/board`, {
        headers: {
          "Content-Type": "application/json",
          Authorizatoin: "authorization"
        },
        data: {}
      })
      .then(res => {
        let status = res.status;
        if (status === 200) {
          console.log("[staff board] ", res.data);
          this.boardArr = res.data;
        }
      })
      .catch(err => {
        console.error("[error is] ", err);
        return err;
      });
  };

  @action
  saveBoard = vo => {
    return axios.post(`${process.env.REACT_APP_BOARD_URI}/board`, vo, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorizatoin: "authorization"
      }
    });
  };

  @computed
  get boardlist() {
    return this.boardArr;
  }
}
