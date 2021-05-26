import React from "react";
import LyricFinder from './components/LyricFinder'
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentTitle from 'react-document-title';


const App = () => {
    return (
        <DocumentTitle title="Lyrics iTunes Finder">
        <div className="App">
            <LyricFinder />
        </div>
        </DocumentTitle>
    )
}
export default App