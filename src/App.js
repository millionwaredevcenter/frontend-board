import React, { Component } from "react";
import "antd/dist/antd.css";

import ListByAntd from "./components/ListByAntd";

class App extends Component {
  state = {
    boards: []
  };

  componentDidMount = () => {
    this.loadBoard();
  };

  loadBoard = () => {
    const url = `${process.env.REACT_APP_BOARD_URI}/board`;
    console.log("[url is] ", url);
    fetch(url)
      .then(res => res.json())
      .then(boards => {
        this.setState({ boards });
      });
  };

  render() {
    const { boards } = this.state;
    return (
      <div className="App">
        {Array.isArray(boards) ? <ListByAntd boards={boards} /> : null}
      </div>
    );
  }
}

export default App;
