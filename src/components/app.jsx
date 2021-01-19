import React, {Component} from 'react';
import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';

class App extends Components {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
        }
    }

    render() {
        <div>
            <div className="left-scene">  
                <FlatList flats = {this.state.gifs}/>
            </div>
            <div className="right-scene">
            </div>
        </div>
    }
}

export default App