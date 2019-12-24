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
            itunes: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSecondChange = this.handleSecondChange.bind(this)
        this.clear = this.clear.bind(this) 
        
    }
    
    fetchData = async () => {
        this.setState({ loading: true, error: false })
        await axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
            .then(res => {
                this.setState({
                    loading: false,
                    artistLyrics: res.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true, loading: false})
            })
    }

    fetchItunesData = async () => {
        this.setState({ loading: true, error: false})
        await axios.get(`https://itunes.apple.com/search?term=${this.state.artist}&term=${this.state.title}&limit=1`)
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
                />
                <Lyrics
                    error={this.state.error}
                    artistLyrics={this.state.artistLyrics}
                    loading={this.state.loading}
                />
                <ITunes 
                    error={this.state.error}
                    itunes={this.state.itunes}
                    loading={this.state.loading}
                    artist={this.state.artist}
                />
            </div>
        )
    }
}
export default LyricFinder