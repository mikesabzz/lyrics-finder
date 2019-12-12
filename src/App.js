import React from 'react';
import SongTitle from './components/SongTitle';
import Artists from './components/Artists';
import Lyrics from './components/Lyrics'; 
// import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      artist: {},
      title: {}
    }
  }
  componentDidMount() {
    fetch(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        artist: data
      })
    })
    .then(data => {
      this.setState({
        title: data
      })
    })
  }

  handleArtistSearch = (event) => {
    event.preventDefault()
    this.setState({
      artist: event.target.value
    })
  }
  handleTitleSearch = (event) => {
    event.preventDefault()
    this.setState({
      title: event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <Artists artistName={this.state} onChange={this.handleArtistSearch} />
        <SongTitle songTitle={this.state} onChange={this.handleTitleSearch} />   
        <Lyrics />
      </div>
    );
  }
}

export default App;
