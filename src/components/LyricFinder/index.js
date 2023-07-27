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
        const apiUrl = "http://localhost:5000/lyrics";
        fetch(apiUrl + `?track=${this.state.title}&artist=${this.state.artist}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            this.setState({
                loading: false,
                artistLyrics: data.message.body.lyrics.lyrics_body,
            })
            // Handle the lyrics data here
        })
        .catch((error) => {
            console.error('Error fetching lyrics:', error);
        });

    };
    

    // fetchData = async () => {
    //     const lyricsApi = process.env.Lyrics_React_API_KEY;
    //     this.setState({ loading: true, error: false })
    //     await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_track=${this.state.title}&q_artist=${this.state.artist}&apikey=`)
    //         .then(res => {
    //             console.log(res.data.message.body.lyrics);
    //             this.setState({
    //                 loading: false,
    //                 artistLyrics: res.data.message.body.lyrics,
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.setState({error: true, loading: false})
    //         })
    // }

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
    componentDidMount() {
        document.body.style.backgroundColor = "black"    
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