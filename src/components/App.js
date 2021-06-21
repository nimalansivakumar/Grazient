import React from "react";
import "./App.css";
import Control from "./Control";
import Design from "./Design";
import TwitterLogo from "../images/twitter.png";
import GitHubLogo from "../images/logo.png";

class App extends React.Component {
  state = {
    color1: "",
    color2: "",
    degree: 0,
    position: 0,
  };

  componentDidMount() {
    this.setState({
      color1: "#4495e9",
      color2: "#fc466b",
      degree: 0,
    });
  }

  handleStateChange = (id, color) => {
    this.setState({ [id]: color });
  };

  render() {
    return (
      <div>
        <Design state={this.state} />
        <Control state={this.state} handler={this.handleStateChange} />
        <footer>
          <div>
            <a href="https://twitter.com/Nimalan_" target="_blank">
              <img alt="Twitter" src={TwitterLogo}></img>
            </a>
            <a href="https://github.com/nimalansivakumar" target="_blank">
              <img alt="Github" src={GitHubLogo}></img>
            </a>
          </div>
          <p>Made by Nimalan with ❤️</p>
        </footer>
      </div>
    );
  }
}

export default App;
