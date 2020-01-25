import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import PlayersList from './Components/PlayersList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:500/api/players')
      .then(res => res.json())

      .then(data => {
        this.setState({player: data});
      })

      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <NavBar/>
        
        <PlayersList players={this.state.player}/>
      </div>
    );
  }
}

export default App;
