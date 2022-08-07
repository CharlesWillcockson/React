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
    console.log('constructor');
  }

  // Brings in the API. mounts the initial state of the render. this runs 3rd.
  componentDidMount() {
    console.log('componentDidMount');
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
    console.log('render');
  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='Search Monsters' onChange={(event) => {
        const searchString = event.target.value.toLocaleLowerCase();
        const filteredMonsters = this.state.monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(event.target.value);
        });

        this.setState(() => {
          return {monsters: filteredMonsters};
        })
      }} />
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
