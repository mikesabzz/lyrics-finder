import React from 'react';
// import axios from 'axios';
import './App.css';
import Lyrics from './components/Lyrics';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artist: "",
      title: "",
      lyrics: "", 
      displayLyrics: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    fetch(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          lyrics: json,
        })
        this.setState({ displayLyrics: this.state.lyrics });
      })
    }

    handleChange(event) {
      this.setState({artist: event.target.value})
    }
    handleTitleChange(event) {
      this.setState({title: event.target.value})
    }
    handleSubmit(event) {
      this.setState({displayLyrics: this.state.lyrics})
      event.preventDefault()
    }
    
    renderNames() {
    const { artist, title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Artist:
          <input type="text" value={artist} onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={this.handleTitleChange} />
        </label>
          <input type="submit" value="Submit" />
      </form>
    )
  }
  renderSongs = () => {
    return this.state.displayLyrics.map((lyric, index) => {
      const { lyrics } = lyric;
      return (
        <Lyrics
        key={index}
        lyrics={lyrics}
        ></Lyrics>
      )
    })
  }
  render() {
    console.log(this.state.lyrics)
    console.log(this.state.displayLyrics)
    return (
      <div>
        <div>{this.renderSongs()}</div>
        <div>{this.renderNames()}</div>
      </div>
    )
  }
}
export default App;
