import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            artistLyrics: {},
            error: "",
            artist: "",
            title: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSecondChange = this.handleSecondChange.bind(this)
    }
    
    componentDidMount() {
        this.setState({ loading: true })
        fetch(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    artistLyrics: data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: "Lyrics not Available" })
            })
    }
    handleChange(event) {
        this.setState({artist: event.target.value})
    }
    handleSecondChange(event) {
        this.setState({title: event.target.value})
    }

    
    render() {
        console.log("artist", this.state.artist)
        console.log("title", this.state.title)
        const { error } = this.state
        const text = this.state.loading ? "loading..." : this.state.artistLyrics.lyrics
        return (
            <div>
                <p>{text}</p>
                { error ? <p>{error}</p> : null }
                <div>
                    <form>
                        <label>
                            <input type="text" value={this.state.artist} onChange={this.handleChange} />
                        </label>
                        <label>
                            <input type="text" value={this.state.title} onChange={this.handleSecondChange} />
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default App