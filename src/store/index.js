import BoardStore from "./board/BoardStore";

class RootStore {
  constructor() {
    this.board = new BoardStore(this);
  }
}

export default RootStore;
