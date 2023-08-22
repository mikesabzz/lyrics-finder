// import React, {Component} from "react";
// import axios from 'axios'
// import Lyrics from '../Lyrics'
// import FormInput from '../FormInput'
// import ITunes from '../ITunes'

// class LyricFinder extends Component {
//     constructor() {
//         super()
//         //place these in usestate
//         //look into dependency array
//         this.state = {
//             loading: false,
//             artistLyrics: {},
//             error: "",
//             artist: "",
//             title: "",
//             itunes: [],
//             hidden: false,
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSecondChange = this.handleSecondChange.bind(this)
//         this.clear = this.clear.bind(this)         
//     }

//     fetchData = async () => {
//         //imlement useeffects to recall the functions
//         const apiUrl = "http://localhost:5000/lyrics";
//         try {
//           const response = await fetch(`${apiUrl}?track=${encodeURIComponent(this.state.title)}&artist=${encodeURIComponent(this.state.artist)}`);
//           const data = await response.json();
//           if (response.ok) {
//             this.setState({
//               loading: false,
//               artistLyrics: data.message.body.lyrics.lyrics_body,
//             });
//           } else {
//             throw new Error("Failed to fetch lyrics");
//           }
//         } catch (error) {
//           console.error("Error fetching lyrics:", error);
//           this.setState({
//             loading: false,
//             artistLyrics: "Lyrics Not Found!",
//           });
//         }
//       };
//     fetchItunesData = async () => {
//         this.setState({ loading: true, error: false})
//         await axios.get(`https://itunes.apple.com/search?term=${this.state.artist}+${this.state.title}&media=music&limit=1`)
//         .then(res => {
//             this.setState({
//                 loading: false,
//                 itunes: res.data.results,
//             })
//         })
//         .catch(error => {
//             console.log(error)
//             this.setState({error: true, loading: false})
//         })
//     }
//     clear() {
//         this.reset()
//     }
//     handleChange(event) {
//         event.preventDefault()
//         const {name, value} = event.target
//         this.setState({[name]: value})
//     }
//     handleSecondChange(event) {
//         event.preventDefault()
//         const {name, value} = event.target
//         this.setState({[name]: value})
//     }
//     handleSubmit(event) {
//         event.preventDefault()
//         this.fetchData()
//         this.fetchItunesData()
//         this.handleChange(event)
//         this.handleSecondChange(event)
//         this.setState({ hidden : true });
//     }
//     render() {
//         return (
//             <div>
//                 <FormInput
//                     handleSubmit={this.handleSubmit}
//                     handleChange={this.handleChange}
//                     handleSecondChange={this.handleSecondChange}
//                     artist={this.state.artist}
//                     title={this.state.title}
//                     clear={this.clear}
//                     hidden={this.state.hidden}
//                     disableSubmit={this.disableSubmit}
//                 />
//                 <Lyrics
//                     error={this.state.error}
//                     artistLyrics={this.state.artistLyrics}
//                     loading={this.state.loading}
//                     hidden={this.state.hidden}
//                 /> 
//                 <ITunes 
//                     error={this.state.error}
//                     itunes={this.state.itunes}
//                     loading={this.state.loading}
//                     artist={this.state.artist}
//                     title={this.state.title}
//                 /> 
//             </div>
//         )
//     }
// }
// export default LyricFinder
import React, { useState, useEffect } from "react";
import axios from 'axios'
import Lyrics from '../Lyrics'
import FormInput from '../FormInput'
import ITunes from '../ITunes'

function LyricFinder() {
    const [loading, setLoading] = useState(false);
    const [artistLyrics, setArtistLyrics] = useState({});
    const [error, setError] = useState(false);
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [itunes, setItunes] = useState([]);
    const [hidden, setHidden] = useState(false);

    const fetchData = async () => {
        const apiUrl = "http://localhost:5000/lyrics";
        try {
            const response = await fetch(`${apiUrl}?track=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}`);
            const data = await response.json();
            if (response.ok) {
                setArtistLyrics(data.message.body.lyrics.lyrics_body);
                setError(false);
            } else {
                throw new Error("Failed to fetch lyrics");
            }
        } catch (error) {
            console.error("Error fetching lyrics:", error);
            setArtistLyrics("Lyrics Not Found!");
            setError(true);
        }
        setLoading(false);
    };

    const fetchItunesData = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await axios.get(`https://itunes.apple.com/search?term=${artist}+${title}&media=music&limit=1`);
            setItunes(response.data.results);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    };

    // const clear = () => {
    //     reset();
    // }
    useEffect = () => {
        fetchItunesData();
        fetchData();
    }

    const handleChange = event => {
        const { name, value } = event.target;
        if (name === "artist") {
            setArtist(value);
        } else if (name === "title") {
            setTitle(value);
        }
    }

    const handleSecondChange = event => {
        const { name, value } = event.target;
        if (name === "artist") {
            setArtist(value);
        } else if (name === "title") {
            setTitle(value);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchData();
        fetchItunesData();
        handleChange(event);
        handleSecondChange(event);
        setHidden(true);
    }

    return (
        <div>
            <FormInput
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleSecondChange={handleSecondChange}
                artist={artist}
                title={title}
                // clear={clear} 
                hidden={hidden}
            />
            <Lyrics
                error={error}
                artistLyrics={artistLyrics}
                loading={loading}
                hidden={hidden}
            />
            <ITunes
                error={error}
                itunes={itunes}
                loading={loading}
                artist={artist}
                title={title}
            />
        </div>
    )
}

export default LyricFinder;
