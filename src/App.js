import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // the constructor always runs first
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // Brings in the API. mounts the initial state of the render. this runs 3rd.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }
  
  // render is the template for the HTML..this runs 2nd. after the state changes, this runs again so the page is re-rendered with the new state.
  render() {
  return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
    </div>
  );
  }
}

export default App;
