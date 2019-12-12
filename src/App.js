import React from 'react';
import SongTitle from './components/SongTitle';
import Artists from './components/Artists';
import Lyrics from './components/Lyrics'; 
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      artist: "",
      title: "",
      lyrics: []
    }
    this.handleArtistSearch = this.handleArtistSearch.bind(this)
    this.handleTitleSearch = this.handleTitleSearch.bind(this)
  }

  fetchData = async () => {
    const url = `https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`
    const data = await axios.get(url)
    const { data: {lyrics} } = data
    this.setState({
      lyrics
    })
  }

  componentDidMount() {
    this.fetchData()
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

  render() {
    console.log("Lyrics", this.state.lyrics)
    return (
      <div className="App">
        <Artists artistName={this.state} onChange={this.handleArtistSearch} /> 
        <SongTitle songTitle={this.state} onChange={this.handleTitleSearch} />   
        <Lyrics lyrics={this.state} onClick={this.handleClick} />
      </div>
    )
  }
}
export default App;
