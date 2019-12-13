import React from 'react';
// import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // artist: [],
      // title: [],
      items: {},
      isLoaded: false
    }
  }


  componentDidMount() {
    fetch('https://api.lyrics.ovh/v1/maroon 5/this love')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    const { items, isLoaded } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <div>
                <h1>{item.lyrics}</h1>
              </div>
            ))}
          </ul>
        </div>
      )
    }
  }
}
export default App;
