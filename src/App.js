import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            artistLyrics: {},
            error: "",
        }
    }
    
    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://api.lyrics.ovh/v1/swedish house mafia/dont you worry child')
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
                this.setState({ error: "no" })
            })
    }

    
    render() {
        const { error } = this.state
        const text = this.state.loading ? "loading..." : this.state.artistLyrics.lyrics
        return (
            <div>
                <p>{text}</p>
                { error ? <p>{error}</p> : null }
            </div>
        )
    }
}

export default App