import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(resolve => console.log(resolve))
      .catch(error => console.log("fetched bad things --> ", error));
  }

  render() {
    return (
      <div>
        <div>Div!</div>
      </div>
    );
  }
}

export default App;
