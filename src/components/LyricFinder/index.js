import React, {Component} from "react";
import axios from 'axios'
import Lyrics from '../Lyrics'
import FormInput from '../FormInput'

class LyricFinder extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            artistLyrics: {},
            error: "",
            artist: "",
            title: "",
            items: []
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
        await axios.get(`https://itunes.apple.com/search?term=${this.state.title}`)
        .then(res => {
            this.setState({
                loading: false,
                items: res.data.results,
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
        const { error, items, loading } = this.state
        const array = items.map(item => {
            return (
                <div>
                    <audio controls>
                        <source src={item.previewUrl} />
                    </audio>
                    <img src={item.artworkUrl100} />
                </div>
            )
        })
        const arrayFirst = loading? <h1>Loading...</h1> : array[0]
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
                {error ?
                    <div
                        className="lyric-body">
                        Song Not Found!
                        </div>
                    : null
                }
                <Lyrics
                    artistLyrics={this.state.artistLyrics}
                    loading={this.state.loading}
                />
                <div className="text-white">
                    {arrayFirst}
                    {error ?
                        <div
                            className="lyric-body">
                            Preview Not Found!
                        </div>
                        : null
                    }
                    
                </div>
            </div>
        )
    }
}

export default LyricFinder