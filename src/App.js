import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Charles', lastName: 'Willcockson'},
      company: 'Codeup'
    }
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, I am {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.company}</p>
        <button onClick={() => {
          this.setState({name: {firstName: 'Justin', lastName: 'Wilcox'}});
        }}>Change name</button>
      </header>
    </div>
  );
  }
}

export default App;
