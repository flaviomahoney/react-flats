import React, {Component} from 'react';
import Flat from './flat.jsx';

class FlatList extends Components {
    renderlist = () => {
        return this.props.flats.map(flat => {
            return <Flat name = {flat.id}/>
        })

        }
        
    }

    render() {
        return(
            <div className="flat-list">
                {this.renderlist()}
            </div>
        );
    }
}

export default FlatList