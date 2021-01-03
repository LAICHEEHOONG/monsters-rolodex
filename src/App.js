import React from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // console.log(users);
        this.setState({ monsters: users })
      })

  }



  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(obj => {
      return obj.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">

        <input type='search' placeholder='search monsters'
          onChange={event => {
            this.setState({ searchField: event.target.value })
          }} />

        <CardList monsters={filteredMonsters} />


      </div>
    )
  }
}




export default App;









