import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            artistName: {},
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://api.lyrics.ovh/v1/maroon 5/girls like you')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    artistName: data
                })
            })
    }

    
    render() {
        const text = this.state.loading ? "loading..." : this.state.artistName.lyrics
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App