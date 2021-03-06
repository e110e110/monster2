import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./components/searchBox/searchBox.styles.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;

    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>My Monsters!</h1>
        <input
          className="search"
          type="search"
          placeholder="search monster"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        ></input>

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
