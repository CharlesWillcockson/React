import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {
        name: 'Linda',
        id: '12sese'
      },
      {
        name: 'Frank',
        id: '12sedsoel1'
      },
      {
        name: 'Jackie',
        id: '1323sese'
      },
      {
        name: 'Johnny',
        id: '12setredse'
      }
    ]
    };
  }
  
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
