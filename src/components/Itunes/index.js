import React from 'react'
import axios from 'axios'

class Itunes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    fetchData = async () => {
        await axios.get(`https://itunes.apple.com/search?term=maroon 5&term=maps`)
        .then(res => {
            this.setState({
                items: res.data.results,
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
        const { items } = this.state
        const array = items.map(item => {
        return (
         <audio controls>
            <source src={item.previewUrl} />
        </audio>
        )
        })
        const arrayFirst = array[0]
        return (
            <div className="text-white">
                {arrayFirst}
            </div>
        )
    }
}
export default Itunes