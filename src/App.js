import { Component, useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

//--------Functional Component---------
const App = () => {
  const [searchField, setSearchField] = useState('');  //we get back [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>  
        <SearchBox 
          className = 'monsters-search-box'
          onChangeHandler = {onSearchChange} 
          placeholder = 'Search Monsters' 
        />
        <CardList monsters={filteredMonsters} />
    </div>
  );
};

//  -------Class Componoent---------
// class App extends Component {
//   // the constructor always runs first
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   // Brings in the API. mounts the initial state of the render. this runs 3rd.
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users };
//         }
//       )
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }
  
//   // render is the template for the HTML..this runs 2nd. after the state changes, this runs again so the page is re-rendered with the new state.
//   render() {
//     const {monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//   return (
//     <div className="App">

//       <h1 className='app-title'>Monsters Rolodex</h1>  
//       <SearchBox 
//         className = 'search-box'
//         onChangeHandler = {onSearchChange} 
//         placeholder = 'Search Monsters' 
//       />
//       <CardList monsters={filteredMonsters}/>
//     </div>
//   );
//   }
// }

export default App;
