import React from "react";
import Navbar from "./Components/Navbar";
import ListPlayers from "./Components/ListPlayers";
import "./App.css";

class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(resolve => this.setState({ data: resolve }))
      .catch(error => console.log("fetched bad things --> ", error));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ListPlayers players={this.state.data} />
      </div>
    );
  }
}

export default App;
