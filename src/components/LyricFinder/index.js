import React, {Component} from "react";
import axios from 'axios'
import Lyrics from '../Lyrics'
import FormInput from '../FormInput'
import ITunes from '../ITunes'

class LyricFinder extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            artistLyrics: {},
            error: "",
            artist: "",
            title: "",
            itunes: [],
            hidden: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSecondChange = this.handleSecondChange.bind(this)
        this.clear = this.clear.bind(this)         
    }

    fetchData = async () => {
        const apiUrl = "https://lyricsfinder-net.netlify.app/.netlify/functions/index/lyrics";
        try {
          const response = await fetch(`${apiUrl}?track=${encodeURIComponent(this.state.title)}&artist=${encodeURIComponent(this.state.artist)}`);
          const data = await response.json();
          if (response.ok) {
            this.setState({
              loading: false,
              artistLyrics: data.message.body.lyrics.lyrics_body,
            });
          } else {
            throw new Error("Failed to fetch lyrics");
          }
        } catch (error) {
          console.error("Error fetching lyrics:", error);
          this.setState({
            loading: false,
            artistLyrics: "Lyrics Not Found!",
          });
        }
      };
      

    // fetchData = async () => {
    //     const apiUrl = "https://lyricsfinder-net.netlify.app/.netlify/functions/index/lyrics";
    //     fetch(apiUrl + `?track=${this.state.title}&artist=${this.state.artist}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         this.setState({
    //             loading: false,
    //             artistLyrics: data.message.body.lyrics.lyrics_body,
    //         })
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching lyrics:', error);
    //     });

    // };

    fetchItunesData = async () => {
        this.setState({ loading: true, error: false})
        await axios.get(`https://itunes.apple.com/search?term=${this.state.artist}+${this.state.title}&media=music&limit=1`)
        .then(res => {
            this.setState({
                loading: false,
                itunes: res.data.results,
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({error: true, loading: false})
        })
    }
    clear() {
        this.reset()
    }
    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSecondChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit(event) {
        event.preventDefault()
        this.fetchData()
        this.fetchItunesData()
        this.handleChange(event)
        this.handleSecondChange(event)
        this.setState({ hidden : true });
    }
    render() {
        return (
            <div>
                <FormInput
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    handleSecondChange={this.handleSecondChange}
                    artist={this.state.artist}
                    title={this.state.title}
                    clear={this.clear}
                    hidden={this.state.hidden}
                    disableSubmit={this.disableSubmit}
                />
                <Lyrics
                    error={this.state.error}
                    artistLyrics={this.state.artistLyrics}
                    loading={this.state.loading}
                    hidden={this.state.hidden}
                /> 
                <ITunes 
                    error={this.state.error}
                    itunes={this.state.itunes}
                    loading={this.state.loading}
                    artist={this.state.artist}
                    title={this.state.title}
                /> 
            </div>
        )
    }
}
export default LyricFinder