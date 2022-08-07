import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // the constructor always runs first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // Brings in the API. mounts the initial state of the render. this runs 3rd.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
  
  // render is the template for the HTML..this runs 2nd. after the state changes, this runs again so the page is re-rendered with the new state.
  render() {
    const {monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
  return (
    <div className="App">
      <input 
        className='search-box' 
        type='search' 
        placeholder='Search Monsters' 
        onChange= { onSearchChange }
       />
      {/* {
        filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      } */}
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
