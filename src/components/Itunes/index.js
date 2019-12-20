import React from 'react'
import axios from 'axios'

class Itunes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    fetchData = async () => {
        await axios.get(`https://itunes.apple.com/search?term=${this.props.artist}&term=${this.props.title}`)
        .then(res => {
            this.setState({
                data: res.data,
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <div>{this.state.data.kind}</div>
        )
    }
}
export default Itunes