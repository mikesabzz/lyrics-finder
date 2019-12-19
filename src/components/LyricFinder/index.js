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
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSecondChange = this.handleSecondChange.bind(this)
        
    }
    
    fetchData = async () => {
        this.setState({ loading: true })
        await axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
            .then(res => {
                this.setState({
                    loading: false,
                    artistLyrics: res.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({error: "Lyrics not Available"})
            })
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
        this.handleChange(event)
        this.handleSecondChange(event)
    }
    componentWillMount() {
        document.body.style.backgroundColor = "black"    
    }
    render() {
        const {error}=this.state
        return (
            <div>
                <FormInput 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    handleSecondChange={this.handleSecondChange} 
                    artist={this.state.artist}
                    title={this.state.title}
                    />
                    {/* {error? <div>{error}</div> : null} */}
                <Lyrics
                    artistLyrics={this.state.artistLyrics}
                    loading={this.state.loading}
                    error={this.state.error}
                />
            </div>
        )}
}

export default LyricFinder